# Changelog

All notable changes to AI Danny.

## [0.2.0] — 2026-06-15 (24h Sprint)

### Product

- One-move closing block on all Operator replies (`**Your one move:**`) and Cloud replies (`**Try this:**`)
- Skill-matched suggestion chips for top founder questions (sets skill + pre-fills composer)
- Feedback API (`POST /api/feedback`) + thumbs up/down on assistant messages

### UI

- Mobile workspace drawer — founder context and Danny Cloud link accessible below `lg`
- Danny avatar SVG monogram fallback with `dark` / `cloud` variants (fixes missing `/avatars/danny.png`)
- Branded `PageLoader` skeleton on workspace, onboarding, and chat history load

### Prompt / RAG

- Skill-aware brain prefetch with query boosts per mode (diagnostic, positioning, content, cloud)
- Smarter excerpt extraction around best-matching paragraph + framework citation chips in chat
- Deduplicated system prompt stack — compact soul skips full guardrails file; Cloud loads `CLOUD.md` only; `maxSystemChars` ceiling

### Cost

- Daily per-user message cap via Clerk metadata (`DAILY_MESSAGE_CAP`, `DAILY_CLOUD_MESSAGE_CAP`) — returns 429 when exceeded

### Docs

- Added `SPRINT-FINDINGS.md` — architecture audit and next-sprint recommendations
