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
};

export const SKILLS: Record<SkillId, Skill> = {
  general: {
    id: "general",
    label: "AI Danny",
    description: "Strategy, AI systems, personal brand, pipeline",
    prompt: `Default mode. Answer as AI Danny. One clear next action. Direct, dry-humoured.`,
    suggestions: [
      "What's the one move I should make this week to turn LinkedIn into a client channel?",
      "I'm posting consistently but nobody books calls. Diagnose it.",
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
    suggestions: [
      "Score this hook: 'AI won't replace you. Someone using AI will.'",
      "I wrote a carousel about personal branding. What would you need to score it?",
      "Why do my posts get likes but zero DMs?",
    ],
  },
  positioning: {
    id: "positioning",
    label: "Positioning",
    description: "ICP, category, offer clarity",
    prompt: `Think like Danny on positioning. Pressure-test category, ICP fit, and offer clarity.
Use the client's workspace context when available.
Push back on vague positioning. Force specificity.`,
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
    suggestions: [],
  },
};

export function getSkill(id?: string): Skill {
  if (id && id in SKILLS) return SKILLS[id as SkillId];
  return SKILLS.general;
}
