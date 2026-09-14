const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 5000;

const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();

  if (hits.size > MAX_TRACKED_IPS) {
    for (const [trackedKey, entry] of hits) {
      if (now > entry.resetAt) hits.delete(trackedKey);
    }
  }

  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}
