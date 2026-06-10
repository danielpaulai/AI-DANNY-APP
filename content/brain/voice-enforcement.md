# Voice enforcement index

AI Danny runs three layers so output sounds like Danny, not ChatGPT:

1. **Prompt** — `content/soul/VOICE-GUARDRAILS.md` + `STYLE.md` loaded on every chat (compact soul bundle).
2. **Brain** — vault files under `content/knowledge/02-voice-communication/` (words-you-ban, sentence-rhythm, linkedin-voice).
3. **Post-process** — `src/lib/agents/voice-guardrails.ts` strips em dashes, AI slop phrases, and enforces rhythm on every assistant message.

## External guardrail sources (pattern libraries)

| Source | What we use |
|--------|-------------|
| [de-ai-ify](https://github.com/search?q=de-ai-ify+skill) (theflohart) | 47-pattern AI slop detection — transitions, hedges, buzzwords |
| Danny vault `words-you-ban.md` | Full anti-slop list + coaching scripts |
| Danny vault `sentence-rhythm-rules.md` | Taki one-sentence-per-paragraph rule |
| Hormozi / Brunson handbooks (synthesized) | Short punchy line rhythm, not their vocabulary |

We synthesize expert **frameworks** in Danny's voice. We never paste book text.

## If output still sounds AI

Run `npm run sync-knowledge` to refresh vault voice files, then `npm run ingest`.
