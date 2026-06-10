import fs from "node:fs/promises";
import path from "node:path";
import type { BrainChunk, BrainSearchResult } from "./types";

const INDEX_PATH = path.join(process.cwd(), "data", "brain-index.json");

let cache: { chunks: BrainChunk[]; loadedAt: number } | null = null;
const TTL_MS = 30_000;

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function scoreChunk(chunk: BrainChunk, tokens: string[]): number {
  const hay = `${chunk.title} ${chunk.text} ${chunk.tags.join(" ")}`.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (chunk.title.toLowerCase().includes(t)) score += 4;
    if (chunk.tags.some((tag) => tag.includes(t))) score += 3;
    const matches = hay.split(t).length - 1;
    score += Math.min(matches, 5);
  }
  return score;
}

export async function loadBrainIndex(): Promise<BrainChunk[]> {
  if (cache && Date.now() - cache.loadedAt < TTL_MS) return cache.chunks;
  const raw = await fs.readFile(INDEX_PATH, "utf8");
  const chunks = JSON.parse(raw) as BrainChunk[];
  cache = { chunks, loadedAt: Date.now() };
  return chunks;
}

export async function searchBrain(
  query: string,
  limit = 5,
  excerptChars = 320,
): Promise<BrainSearchResult[]> {
  const tokens = tokenize(query);
  if (!tokens.length) return [];
  const chunks = await loadBrainIndex();
  const ranked = chunks
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, tokens) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return ranked.map(({ chunk, score }) => ({
    id: chunk.id,
    title: chunk.title,
    source: chunk.source,
    excerpt: chunk.text.slice(0, excerptChars).trim(),
    score,
  }));
}
