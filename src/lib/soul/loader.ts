import fs from "node:fs/promises";
import path from "node:path";

const SOUL_DIR = path.join(process.cwd(), "content", "soul");

function stripFrontmatter(text: string): string {
  if (text.startsWith("---")) {
    const end = text.indexOf("---", 3);
    if (end !== -1) return text.slice(end + 3).trim();
  }
  return text;
}

/** Full bundle for admin/debug. Chat uses compact mode. */
export async function loadSoulBundle(options?: {
  compact?: boolean;
}): Promise<string> {
  if (options?.compact) {
    const soul = await fs.readFile(path.join(SOUL_DIR, "SOUL.md"), "utf8");
    return stripFrontmatter(soul);
  }

  const files = ["SOUL.md", "STYLE.md", "PRIVACY.md"];
  const parts = await Promise.all(
    files.map(async (file) => {
      const txt = await fs.readFile(path.join(SOUL_DIR, file), "utf8");
      return `<!-- ${file} -->\n${txt}`;
    }),
  );
  return parts.join("\n\n");
}
