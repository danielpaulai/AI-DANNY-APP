-- Links Clerk users to workspaces (replaces Clerk privateMetadata as source of truth)
-- Run in Supabase SQL Editor after 0001_ai_danny.sql

create table if not exists public.workspace_members (
  clerk_user_id text primary key,
  workspace_id text not null references public.workspaces(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists workspace_members_workspace_idx
  on public.workspace_members (workspace_id);

alter table public.workspace_members enable row level security;
