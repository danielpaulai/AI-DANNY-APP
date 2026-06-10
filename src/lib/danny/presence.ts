/** Rotating Danny lines — dry wit, operator voice. Shown in empty chat + sidebar. */
export const DANNY_QUIPS = [
  "I'm the version of Danny that never sleeps. Slightly less handsome, equally opinionated.",
  "Ask me anything. I'll cite a framework, crack a joke, and give you one move. In that order. Maybe.",
  "Your personal brand is the last moat. Everything else, ChatGPT can fake.",
  "I don't do 'Great question!' I do numbers, names, and the occasional Finnish shrug.",
  "Pipeline over theatre. If your post gets 1,000 likes and zero DMs, we fix that.",
  "Built from 2,000+ posts, 30+ workshops, and one stubborn belief: founders should sound like themselves.",
  "I'm AI Danny. Not live Danny. But I know where the bodies are buried in your content strategy.",
] as const;

export function randomQuip(): string {
  return DANNY_QUIPS[Math.floor(Math.random() * DANNY_QUIPS.length)];
}

/** One line — professional operator + dry wit. Used across chat, sidebar, landing. */
export const DANNY_TAGLINE =
  "Serious about your business. Dry wit about everything else.";
