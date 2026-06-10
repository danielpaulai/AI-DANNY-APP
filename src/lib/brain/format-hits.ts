import type { BrainSearchResult } from "./types";

/** Compact brain context for the system prompt — minimal tokens. */
export function formatBrainHits(results: BrainSearchResult[]): string {
  if (!results.length) return "";
  const lines = results.map(
    (r) => `- **${r.title}**: ${r.excerpt.replace(/\s+/g, " ").trim()}`,
  );
  return `## Methodology hits (cite titles if used)\n${lines.join("\n")}`;
}
