import type { SkillId } from "@/lib/agents/skills";

const BUSINESS_KEYWORDS =
  /\b(linkedin|icp|positioning|offer|hook|post|content|pipeline|client|revenue|dm|funnel|workshop|webinar|marketing|brand|diagnostic|score)\b/i;

const SKILL_BOOSTS: Partial<Record<SkillId, string>> = {
  diagnostic:
    "invisibility voice POV specificity asking score diagnostic hook rewrite",
  positioning: "ICP category offer clarity positioning who its for not for",
  content: "hooks pillars LinkedIn pipeline content engine post week",
  general: "strategy one move pipeline LinkedIn offer",
};

const CLOUD_BOOST =
  "motivation mindset support resilience stoic reframe burnout doubt";

/** Expand user query with skill-specific terms for better brain prefetch. */
export function buildBrainQuery(userText: string, skillId: SkillId): string {
  const trimmed = userText.trim();
  if (!trimmed) return trimmed;

  if (skillId === "cloud") {
    if (BUSINESS_KEYWORDS.test(trimmed)) return trimmed;
    return `${trimmed} ${CLOUD_BOOST}`;
  }

  const boost = SKILL_BOOSTS[skillId];
  return boost ? `${trimmed} ${boost}` : trimmed;
}
