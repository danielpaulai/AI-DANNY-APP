# AI Danny — Sprint Findings

**Date:** 2026-06-15  
**Scope:** 24-hour sprint audit + improvements

---

## Architecture Map

```
Founder → Clerk Auth → /onboarding (access code) → /app or /cloud
                              ↓
                    workspace_members (Supabase)
                              ↓
              POST /api/chat ← workspace context + soul + skill + memory + brain
                              ↓
              streamText (Anthropic | Mentor | Kimi) → voice guardrails → persist messages
```

**Content pipeline:** `content/soul/` + `content/brain/` + `content/knowledge/` → `scripts/ingest-brain.mjs` → `data/brain-index.json` (~2,560 chunks) → keyword search at runtime.

**Dual modes:**
- `/app` — Operator Danny: diagnostic, positioning, content, general skills; ~350 words; 1024 output tokens
- `/cloud` — Danny Cloud: motivation/mindset; ~150 words; 512 output tokens

---

## What Works Well

1. **Auth + workspace flow** — Clerk sign-in, access-code onboarding, per-founder context (ICP, positioning, stage) injected into every chat turn.
2. **Voice guardrails** — Compact rules + post-processing (`sanitizeVoiceOutput`) keep output on-brand; banned AI slop enforced.
3. **Token budget** — Central limits in `token-budget.ts`: 8 UI messages, 4×160 memory, 3×180 brain hits, Haiku/gpt-4o-mini defaults.
4. **Dual-mode UX** — Workspace (dark, pipeline-focused) vs Cloud (light, supportive) is a genuine product split, not just a theme swap.
5. **Ingest pipeline** — Brain index rebuilds on every Vercel deploy; privacy sanitization at ingest; expert repos synced via GitHub Actions.
6. **Deployment** — Live at ai-danny-app.vercel.app; push-to-main auto-deploys.

---

## Top Gaps Found (Pre-Sprint)

| Gap | Impact | Sprint fix |
|-----|--------|------------|
| Skill-blind RAG prefetch | Wrong methodology chunks for diagnostic/positioning/content | Skill-aware query boosts |
| Dead `citations` column | Promised "cited methodology" not visible | Persist + render framework chips |
| Duplicate voice guardrails | Wasted input tokens, model rule fatigue | Dedupe soul stack in compact mode |
| No rate limiting | Cost risk on `/api/chat` | Daily per-user message cap |
| Missing avatar asset | Broken `/avatars/danny.png` | SVG monogram fallback |
| Mobile sidebar hidden | Founder context lost on small screens | Slide-over drawer |
| Feedback table unused | No product learning loop | Feedback API + thumbs UI |
| Generic loading states | Feels unfinished | Branded PageLoader skeleton |
| Answers lack one clear move | Conversion gap vs top-10 questions | Mandatory closing block in reply rules |

---

## Recommended Next Sprint (Out of Scope)

1. **Semantic search** — Voyage embeddings + rerank; keyword search is brittle for paraphrases.
2. **White-label per workspace** — `brand_name`, `brand_accent`, `logo_url` on workspaces table.
3. **Capacitor mobile shell** — WebView wrapper for `/app` + `/cloud`.
4. **Rolling memory summarization** — Background job to compress session history beyond 4×160 chars.
5. **Per-workspace token budgets** — Usage dashboard for founders + admin.

---

## Cost Posture

**Existing controls:** cheap models, 1024/512 output caps, 8-message window, compact soul, no embedding API.

**Sprint addition:** `DAILY_MESSAGE_CAP` env var with Clerk metadata counter — returns 429 when exceeded.

**Recommendation for production:** `AI_PROVIDER=mentor` + `AI_MODEL=openai/gpt-4o-mini`.
