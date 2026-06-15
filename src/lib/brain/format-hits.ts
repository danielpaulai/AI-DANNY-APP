import type { BrainSearchResult } from "./types";

export type BrainCitation = {
  id: string;
  title: string;
  source: string;
};

/** Compact brain context for the system prompt — minimal tokens. */
export function formatBrainHits(results: BrainSearchResult[]): string {
  if (!results.length) return "";
  const lines = results.map(
    (r) => `- **${r.title}**: ${r.excerpt.replace(/\s+/g, " ").trim()}`,
  );
  return `## Methodology hits (name the title if you use a framework from this list)\n${lines.join("\n")}`;
}

export function toBrainCitations(results: BrainSearchResult[]): BrainCitation[] {
  return results.map((r) => ({
    id: r.id,
    title: r.title,
    source: r.source,
  }));
}
