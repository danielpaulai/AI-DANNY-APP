-- Daniel Paul — founder workspace (Purely Personal)
-- Run in Supabase SQL Editor if not using npm run create-workspace

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
  'daniel-paul',
  'Daniel Paul · Purely Personal',
  'purely-personal-danny',
  'Daniel Paul',
  'Purely Personal Branding — AI-native personal brand systems for founders. Workshops, Claude skills, and compounding content infrastructure.',
  'Founders and operators ($500K–$5M) who know they need to be visible but refuse to sound like generic LinkedIn bots. Post-workshop clients building their AI Marketing Employee.',
  'The operator who builds the personal brand moat AI can''t clone — voice-locked systems, not agency retainers.',
  'Direct, warm, operator energy. Short paragraphs. Finnish pragmatism. Anti-jargon. Real numbers and client stories. Humour when it lands. Contact: danny@danielpaul.ai',
  'Founder — shipping AI Danny as the premium client product layer'
) on conflict (id) do update set
  name = excluded.name,
  access_code = excluded.access_code,
  founder_name = excluded.founder_name,
  business = excluded.business,
  icp = excluded.icp,
  positioning = excluded.positioning,
  voice_notes = excluded.voice_notes,
  stage = excluded.stage;
