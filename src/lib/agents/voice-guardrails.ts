/**
 * Danny voice enforcement — de-AI-ify patterns + STYLE.md bans.
 * Used server-side (onFinish) and client-side (display).
 * Based on de-ai-ify skill (47-pattern scan) + vault words-you-ban.
 */

/** Replace em/en dashes and normalize punctuation slop. */
export function fixPunctuation(text: string): string {
  return text
    .replace(/\s*[—–]\s*/g, ". ")
    .replace(/\s*-\s*(?=[A-Za-z])/g, ". ")
    .replace(/\.\s+\./g, ".")
    .replace(/  +/g, " ")
    .trim();
}

const PHRASE_REPLACEMENTS: [RegExp, string][] = [
  [/\bLet's dive in\.?\s*/gi, ""],
  [/\bLet us dive in\.?\s*/gi, ""],
  [/\bLet's unpack\.?\s*/gi, ""],
  [/\bBuckle up[.!—–-]*\s*/gi, ""],
  [/\bGreat question[!.]?\s*/gi, ""],
  [/\bHere's a hot take[.:—–-]*\s*/gi, ""],
  [/\bIn today's fast-paced world,?\s*/gi, ""],
  [/\bIt's no secret that\s*/gi, ""],
  [/\bAt the end of the day,?\s*/gi, ""],
  [/\bIt's important to note that\s*/gi, ""],
  [/\bIt's worth mentioning that\s*/gi, ""],
  [/\bThe key takeaway is:?\s*/gi, ""],
  [/\bIn conclusion,?\s*/gi, ""],
  [/\bTo summarize,?\s*/gi, ""],
  [/\bMoreover,?\s*/gi, ""],
  [/\bFurthermore,?\s*/gi, ""],
  [/\bAdditionally,?\s*/gi, ""],
  [/\bNevertheless,?\s*/gi, ""],
  [/\bImagine if\s*/gi, ""],
];

const WORD_REPLACEMENTS: [RegExp, string][] = [
  [/\bleverage\b/gi, "use"],
  [/\butilize\b/gi, "use"],
  [/\bfacilitate\b/gi, "help"],
  [/\boptimize\b/gi, "improve"],
  [/\bunlock\b/gi, "open"],
  [/\bunleash\b/gi, "use"],
  [/\bharness\b/gi, "use"],
  [/\bdelve\b/gi, "look"],
  [/\brobust\b/gi, "solid"],
  [/\bseamless\b/gi, "smooth"],
  [/\bholistic\b/gi, "full"],
  [/\bcurated\b/gi, "picked"],
  [/\bbespoke\b/gi, "custom"],
  [/\bempower\b/gi, "help"],
  [/\bsynergy\b/gi, "fit"],
  [/\bgame[- ]changer\b/gi, "shift"],
  [/\brevolutionary\b/gi, "new"],
  [/\bcutting-edge\b/gi, "current"],
  [/\bbest-in-class\b/gi, "strong"],
  [/\bnavigate the landscape\b/gi, "work through this"],
  [/\bfast-paced world\b/gi, "market"],
];

/** Apply phrase and word substitutions. */
export function stripAiSlop(text: string): string {
  let out = text;
  for (const [re, rep] of PHRASE_REPLACEMENTS) {
    out = out.replace(re, rep);
  }
  for (const [re, rep] of WORD_REPLACEMENTS) {
    out = out.replace(re, rep);
  }
  return out;
}

/** Enforce one-sentence-per-paragraph for double-newline blocks (light pass). */
export function enforceRhythm(text: string): string {
  return text
    .split(/\n\n+/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed || trimmed.startsWith("-") || trimmed.startsWith("*")) {
        return trimmed;
      }
      if (trimmed.includes("\n")) return trimmed;
      const sentences = trimmed.split(/(?<=[.!?])\s+/);
      if (sentences.length <= 1) return trimmed;
      return sentences.map((s) => s.trim()).filter(Boolean).join("\n\n");
    })
    .filter(Boolean)
    .join("\n\n");
}

/** Full pipeline for assistant output. */
export function sanitizeVoiceOutput(text: string): string {
  if (!text?.trim()) return text;
  let out = text;
  out = fixPunctuation(out);
  out = stripAiSlop(out);
  out = enforceRhythm(out);
  out = out.replace(/\n{3,}/g, "\n\n").trim();
  return out;
}

/** Compact block injected at top of system prompt. */
export const VOICE_GUARDRAILS_COMPACT = `VOICE (non-negotiable): Zero em dashes. Zero AI slop (leverage, delve, unlock, Moreover, Great question, Let's dive in). One sentence per paragraph. Hormozi-short beats. Danny dry wit. Plain English. Open with a claim. Close with a move.`;
