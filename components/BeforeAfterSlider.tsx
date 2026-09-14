"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: SliderImage;
  after: SliderImage;
  beforeLabel: string;
  afterLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    updateFromClientX(event.clientX);
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    setDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={() => setDragging(false)}
      role="slider"
      aria-label={`${beforeLabel} / ${afterLabel}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (event.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
      className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-xl2"
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <span className="pointer-events-none absolute left-2 top-2 rounded-pill bg-gold-500 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-950">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute left-2 top-2 rounded-pill bg-forest-950/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
          {beforeLabel}
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-cream-50 shadow-card"
        style={{ left: `${position}%` }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50 text-forest-800 shadow-card">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
