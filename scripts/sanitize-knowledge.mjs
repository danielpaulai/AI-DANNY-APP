/**
 * Sanitize vault knowledge before indexing for client-facing AI Danny.
 * Strips/redacts: client names, exact finances, vault links, PII, internal pricing.
 * Keeps: frameworks, patterns, voice, methodology — generalized.
 */

/** Paths (relative to repo root) never indexed — too personal or client-identifiable. */
export const EXCLUDED_KNOWLEDGE_PATHS = [
  "content/knowledge/06-personal-branding-coaching/",
  "content/knowledge/13-cash-pricing-economics/",
  "content/knowledge/15-decisions-library/",
  "content/knowledge/01-identity-worldview/family-partnership-lens.md",
  "content/knowledge/01-identity-worldview/spiritual-faith-lens.md",
  "content/knowledge/04-offers-pricing/pricing-experiments-results.md",
  "content/knowledge/04-offers-pricing/renewal-patterns.md",
  "content/knowledge/08-sales-discovery/warm-prospect-arc.md",
  "content/knowledge/12-operations-team/internal-disagreements.md",
  "content/knowledge/12-operations-team/decision-logs.md",
];

/** First names appearing in vault case studies — redact to "a client". */
const CLIENT_FIRST_NAMES = [
  "Angelin",
  "Anusha",
  "Armin",
  "Aziz",
  "Bianca",
  "Bastian",
  "Cain",
  "Clarissa",
  "Dasha",
  "Franziska",
  "Hanit",
  "Ilef",
  "Imani",
  "Jonathan",
  "Keith",
  "Kasia",
  "Kruti",
  "Lancer",
  "Mehsum",
  "Thomas",
  "Noman",
  "Priyanka",
  "Rhea",
  "Ricardo",
  "Saikat",
  "Sandeep",
  "Sandro",
  "Sara",
  "Sofia",
  "Bryant",
];

const NAME_REPLACEMENTS = [
  [/Angelin Shalini/gi, "a ready-to-ship operator"],
  [/Priyanka C\.?/gi, "a workshop host"],
  [/Cain Ransbottyn/gi, "a coaching client"],
  [/James Lancer/gi, "a long-time consultant"],
  [/Imani Kirika/gi, "a fitness professional"],
  [/NAS\.IO|Nas\.io|NasOps/gi, "a platform partner"],
  [/Imperva/gi, "a prior employer"],
  [/AICEO/gi, "a tiered program offer"],
];

function generalizeDollars(raw) {
  const num = Number.parseInt(raw.replace(/[$€,]/g, ""), 10);
  if (Number.isNaN(num)) return "a meaningful amount";
  if (num < 500) return "a low three-figure amount";
  if (num < 5_000) return "low four figures";
  if (num < 25_000) return "mid four figures";
  if (num < 100_000) return "low five figures";
  if (num < 500_000) return "mid five figures";
  if (num < 1_000_000) return "high six figures";
  return "seven figures or above";
}

function redactMoney(text) {
  return text
    .replace(/\$[\d,]+K\s*[-–]\s*\$?[\d,]+M/gi, "mid-six-figure to seven-figure range")
    .replace(/\$[\d,]+(?:\.\d{2})?(?:\s*\/(?:mo|wk|month|week)|(?:\s*×\s*\d+))?/gi, (m) =>
      generalizeDollars(m.replace(/\/.*$/i, "")),
    )
    .replace(/€[\d,]+(?:\.\d{2})?/gi, (m) => generalizeDollars(m))
    .replace(/\b[\d,]+K\s*[-–]\s*[\d,]+M\b/gi, "mid-six-figure to seven-figure range")
    .replace(/\b[\d,]+K\s+(?:ARR|revenue|MRR)\b/gi, "mid-six-figure ARR")
    .replace(/\b[\d,]+K\b(?=\s+(?:more|from|in|per|month))/gi, () => "mid five figures")
    .replace(/\b[\d,]+M\+\b/gi, "seven figures plus")
    .replace(/(?:low|mid|high)\s+(?:three|four|five|six)[\s-]*figure amounts?K/gi, (m) =>
      m.replace(/K$/i, ""),
    )
    .replace(/figuresK/gi, "figures")
    .replace(/\b00K[-–]/gi, "")
    .replace(/\b[\d,]+K\+/gi, "mid six figures plus")
    .replace(/\b\dK–\dK\b/gi, "mid four figures")
    .replace(/\b([0-9]+)K–([0-9]+)K\b/gi, "mid four to low five figures")
    .replace(/\b([LM])\s+seed\b/gi, "a seed")
    .replace(/\b([LM])\/year\b/gi, "seven figures per year")
    .replace(/\b([LM])\/month\b/gi, "high six figures per month")
    .replace(/ONE HUNDRED THOUSAND DOLLARS/gi, "a significant personal investment");
}

function redactPii(text) {
  return text
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[contact redacted]")
    .replace(/\+?\d[\d\s\-()]{8,}\d/g, "[phone redacted]")
    .replace(/(?:sk-|pk_|api[_-]?key)[a-zA-Z0-9_-]{12,}/gi, "[credential redacted]");
}

function redactVaultLinks(text) {
  // Pull first names out of wikilink titles before removing
  let out = text.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    const token = inner.split(/[_\s]/)[0];
    if (/^[A-Z][a-z]{2,}$/.test(token) && !["Personal", "Workshop", "Sales", "Building"].includes(token)) {
      return "[a past engagement]";
    }
    return "[a past engagement]";
  });
  out = out.replace(/<!--::DANNY-(?:DISTILL|REDACT)-(?:START|END)::-->/g, "");
  out = out.replace(/\*\*Cited from\*\*[^\n.]+\.?/gi, "");
  out = out.replace(/Cited from \[a past engagement\]\.?/gi, "");
  return out;
}

function redactClientNames(text) {
  let out = text;
  for (const [pattern, replacement] of NAME_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  for (const name of CLIENT_FIRST_NAMES) {
    out = out.replace(new RegExp(`\\b${name}\\b`, "g"), "a client");
  }
  return out;
}

function redactInternalPricing(text) {
  return text
    .replace(/PIF\s*\/[^\n.]+\./gi, "pay-in-full tier pricing.")
    .replace(/\b\d+\s*total spots\b/gi, "limited capacity");
}

function cleanBrokenReferences(text) {
  return text
    .replace(/Cited from\s+\./gi, "")
    .replace(/In\s+\[a past engagement\]\s+with\s+a client/gi, "With a client")
    .replace(/In\s+\[a past engagement\]/gi, "In a past engagement")
    .replace(/from\s+\[a past engagement\]/gi, "from a past engagement")
    .replace(/with\s+\[a past engagement\]/gi, "in a past engagement")
    .replace(/\[a past engagement\]\s+with/gi, "In a past engagement, a client")
    .replace(/a client\s+with\s+a client/gi, "a client")
    .replace(/\(\s*\)/g, "")
    .replace(/[^\S\n]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function shouldExcludeKnowledgePath(relativePath) {
  const normalized = relativePath.replace(/\\/g, "/");
  return EXCLUDED_KNOWLEDGE_PATHS.some((p) => normalized.includes(p));
}

export function sanitizeKnowledgeText(text) {
  let out = text;
  out = redactVaultLinks(out);
  out = redactPii(out);
  out = redactMoney(out);
  out = redactClientNames(out);
  out = redactInternalPricing(out);
  out = cleanBrokenReferences(out);
  return out;
}
