export type SkillId =
  | "general"
  | "diagnostic"
  | "positioning"
  | "content"
  | "cloud";

export type Skill = {
  id: SkillId;
  label: string;
  description: string;
  prompt: string;
  suggestions: string[];
  oneMoveHint?: string;
};

/** Cross-skill chips for top founder questions — sets skill + pre-fills composer. */
export type TopQuestionChip = {
  skillId: SkillId;
  text: string;
};

export const TOP_QUESTION_CHIPS: TopQuestionChip[] = [
  {
    skillId: "diagnostic",
    text: "Score my latest LinkedIn hook — Invisibility Diagnostic",
  },
  {
    skillId: "general",
    text: "Why isn't my LinkedIn content converting to calls?",
  },
  {
    skillId: "positioning",
    text: "Pressure-test my positioning and ICP — who it's for, who it's not",
  },
  {
    skillId: "general",
    text: "How do I fix my offer? Hormozi-style value stack for my business",
  },
  {
    skillId: "content",
    text: "What should I post this week? Hooks, pillars, content engine",
  },
  {
    skillId: "general",
    text: "How would Danny set up an AI content system / Marketing Employee?",
  },
  {
    skillId: "content",
    text: "Help me with DMs, follow-up, and pipeline after content",
  },
  {
    skillId: "general",
    text: "Workshop / funnel / webinar structure — Brunson-style, Danny's delivery",
  },
];

export const SKILLS: Record<SkillId, Skill> = {
  general: {
    id: "general",
    label: "AI Danny",
    description: "Strategy, AI systems, personal brand, pipeline",
    prompt: `Default mode. Answer as AI Danny. One clear next action. Direct, dry-humoured.`,
    oneMoveHint: "One pipeline or strategy action for this week.",
    suggestions: [
      "What's my one move this week to turn LinkedIn into a client channel?",
      "I'm posting consistently but nobody books calls. Diagnose the pipeline.",
      "How would Danny set up an AI content system for a solo founder?",
    ],
  },
  diagnostic: {
    id: "diagnostic",
    label: "Invisibility Diagnostic",
    description: "Score content 0-4 on Voice, POV, Specificity, Asking",
    prompt: `Run the Invisibility Diagnostic on any content the user provides.
Score Voice, POV, Specificity, Asking (0-4 each). Total out of 16.
If below 12, call it invisible and give one specific rewrite direction per missing dimension.
Be blunt. Numbers first. No fluff.`,
    oneMoveHint: "One rewrite or hook fix to ship today.",
    suggestions: [
      "Score this hook: 'AI won't replace you. Someone using AI will.'",
      "Why do my posts get likes but zero DMs?",
      "Score my post on personal branding — what would you need from me?",
    ],
  },
  positioning: {
    id: "positioning",
    label: "Positioning",
    description: "ICP, category, offer clarity",
    prompt: `Think like Danny on positioning. Pressure-test category, ICP fit, and offer clarity.
Use the client's workspace context when available.
Push back on vague positioning. Force specificity.`,
    oneMoveHint: "One positioning or ICP clarity action.",
    suggestions: [
      "Pressure-test my positioning: I help founders with AI marketing.",
      "Who is NOT my ICP? Be brutal.",
      "My offer sounds like every other AI consultant. Fix it.",
    ],
  },
  content: {
    id: "content",
    label: "Content Engine",
    description: "Hooks, pillars, pipeline-first content",
    prompt: `Content mode. Pipeline over theatre.
Evaluate every idea against: will this book a call?
Offer hooks, angles, or post structure in plain English.
One sentence per paragraph when drafting copy.`,
    oneMoveHint: "One post, hook, or DM to ship this week.",
    suggestions: [
      "Give me 3 hook options for a post about building an AI marketing employee.",
      "What content pillar should I double down on if I sell workshops?",
      "Turn this idea into a LinkedIn post structure: founders re-explaining themselves to AI daily.",
    ],
  },
  cloud: {
    id: "cloud",
    label: "Danny Cloud",
    description: "Lighter supportive mode — motivation, mindset, life + business",
    prompt: `Cloud mode. Supportive, warm, lighter Danny.
Use motivation brain: Stoic operator playbook, positive mindset, business resilience, support scripts.
Acknowledge → reframe with a named framework → one small move.
~150 words unless they ask for depth. No toxic positivity. No therapy.`,
    oneMoveHint: "One small win they can get today.",
    suggestions: [],
  },
};

export function getSkill(id?: string): Skill {
  if (id && id in SKILLS) return SKILLS[id as SkillId];
  return SKILLS.general;
}
