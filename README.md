# AI Danny

Premium client expert system for **Purely Personal Branding** founders.

Separate from [Second-Brain-Obsidian](https://github.com/danielpaulai/Second-Brain-Obsidian). This repo is the **client-facing product**: private workspaces, cited methodology, skill modes, and a compounding knowledge pipeline.

## What it is

- **Soul** — Danny's voice, humour, and boundaries (`content/soul/`)
- **Brain** — Client-safe methodology corpus (`content/brain/`)
- **Workspaces** — Per-client context (ICP, positioning, stage)
- **Skills** — Invisibility Diagnostic, Positioning, Content Engine, General
- **Memory** — Session history per workspace (compounds over time)
- **Growth** — `scripts/reindex.mjs` refreshes knowledge index

## Quickstart

```bash
npm install
cp .env.local.example .env.local
# Add ANTHROPIC_API_KEY, Clerk keys, Supabase keys
npm run ingest
npm run dev
```

Run both Supabase migrations in SQL Editor (`0001` then `0002`).

Open http://localhost:3000

**Auth:** Clerk sign-in at `/sign-in`. New users enter workspace code at `/onboarding`.

**Demo workspace code:** `purely-personal-demo` (after signing in)

## Architecture

```
content/soul/     → AI personality (SOUL.md, STYLE.md)
content/brain/    → Methodology knowledge (markdown)
data/workspaces/  → Per-client JSON workspaces
data/sessions/    → Per-client chat memory
data/brain-index.json → Search index (generated)
```

## Client workspace

Add `data/workspaces/{id}.json`:

```json
{
  "id": "client-slug",
  "name": "Client Workspace",
  "accessCode": "unique-access-code",
  "founderName": "Name",
  "business": "What they do",
  "icp": "Their ICP",
  "positioning": "Their positioning line",
  "voiceNotes": "How they write",
  "stage": "Where they are",
  "createdAt": "2026-06-01T00:00:00.000Z"
}
```

## Growth pipeline

```bash
npm run reindex   # Re-ingest brain + append growth log
```

Future: pull curated exports from Obsidian vault, question analytics, feedback loops.

## Deploy

Vercel-ready. Set `ANTHROPIC_API_KEY` and Clerk keys in project env. Add Clerk via [Vercel Marketplace](https://vercel.com/integrations/clerk) for auto-provisioned env vars. Migrate workspaces/sessions to Supabase for production persistence.

## License

Private — Purely Personal Branding client product.
