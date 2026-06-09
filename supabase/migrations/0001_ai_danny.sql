-- AI Danny — initial schema
-- Run this in Supabase Dashboard → SQL Editor (paste ONLY this file, not TypeScript)

create extension if not exists "pgcrypto";

-- Client workspaces (replaces data/workspaces/*.json)
create table if not exists public.workspaces (
  id text primary key,
  name text not null,
  access_code text not null unique,
  founder_name text not null,
  business text not null default '',
  icp text not null default '',
  positioning text not null default '',
  voice_notes text not null default '',
  stage text not null default '',
  created_at timestamptz not null default now()
);

-- Chat memory per workspace (replaces data/sessions/*.json)
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  workspace_id text not null references public.workspaces(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  skill_id text,
  citations jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists messages_workspace_created_idx
  on public.messages (workspace_id, created_at desc);

-- Optional feedback loop (growth pipeline)
create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  workspace_id text not null references public.workspaces(id) on delete cascade,
  message_id uuid references public.messages(id) on delete set null,
  rating text not null check (rating in ('helpful', 'used', 'weak')),
  note text,
  created_at timestamptz not null default now()
);

-- Demo workspace (same as data/workspaces/demo.json)
insert into public.workspaces (
  id,
  name,
  access_code,
  founder_name,
  business,
  icp,
  positioning,
  voice_notes,
  stage
) values (
  'demo',
  'Demo Founder Workspace',
  'purely-personal-demo',
  'Alex Rivera',
  'Leadership coaching for tech founders',
  'Series A–C tech founders, 10–80 employees, drowning in content expectations',
  'The coach who helps technical founders become visible CEOs without sounding like a LinkedIn influencer',
  'Direct, warm, no jargon. Short paragraphs. Uses client stories with numbers.',
  'Post-workshop, building consistent LinkedIn presence'
) on conflict (id) do nothing;

-- RLS enabled; app uses SUPABASE_SERVICE_ROLE_KEY server-side.
-- Auth is Clerk (identity) + workspace access codes (onboarding link).
alter table public.workspaces enable row level security;
alter table public.messages enable row level security;
alter table public.feedback enable row level security;
