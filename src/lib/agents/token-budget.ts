/** Central limits — keep each chat turn cheap without losing Danny's voice. */
export const TOKEN_BUDGET = {
  /** Default: Haiku-class model. Override with AI_MODEL in .env.local. */
  defaultModel: "claude-haiku-4-5-20251001",
  maxOutputTokens: Number(process.env.AI_MAX_OUTPUT_TOKENS ?? 1024),
  /** UI messages sent to the model (user + assistant pairs). */
  maxChatMessages: 8,
  /** Stored session lines injected into system prompt. */
  memoryMessages: 4,
  memoryCharsPerMessage: 160,
  /** Pre-fetched brain hits (no tool round-trip). */
  brainPrefetchLimit: 3,
  brainExcerptChars: 180,
  workspaceFieldMaxChars: 220,
} as const;

export function truncate(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}
