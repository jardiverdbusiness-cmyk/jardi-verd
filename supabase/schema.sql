-- Jardí Verd — leads table
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  city text not null,
  service text,
  message text not null,
  locale text not null check (locale in ('ca', 'es', 'en')),
  source_path text,
  status text not null default 'new' check (status in ('new', 'contacted', 'won', 'lost'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row Level Security: only the service role (used server-side by the
-- contact API route) can read or write. No anon/public access.
alter table public.leads enable row level security;

drop policy if exists "Service role full access" on public.leads;
create policy "Service role full access"
  on public.leads
  for all
  to service_role
  using (true)
  with check (true);
