-- Feedback table hardening — safe to re-run after 0001_ai_danny.sql
-- Run in Supabase Dashboard → SQL Editor

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  workspace_id text not null references public.workspaces(id) on delete cascade,
  message_id text,
  rating text not null check (rating in ('helpful', 'used', 'weak')),
  note text,
  created_at timestamptz not null default now()
);

-- Client message ids are not always persisted UUIDs; drop FK if present.
alter table public.feedback drop constraint if exists feedback_message_id_fkey;

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'feedback'
      and column_name = 'message_id'
      and udt_name = 'uuid'
  ) then
    alter table public.feedback alter column message_id type text using message_id::text;
  end if;
end $$;

alter table public.feedback enable row level security;

create index if not exists feedback_workspace_created_idx
  on public.feedback (workspace_id, created_at desc);
