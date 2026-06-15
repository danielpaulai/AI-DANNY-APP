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

/** Chat system bundle: soul + style. Skips full guardrails when compact constant is injected separately. */
export async function loadSoulBundle(options?: {
  compact?: boolean;
}): Promise<string> {
  const read = async (file: string) =>
    stripFrontmatter(await fs.readFile(path.join(SOUL_DIR, file), "utf8"));

  if (options?.compact) {
    const [soul, style] = await Promise.all([read("SOUL.md"), read("STYLE.md")]);
    return `${style}\n\n${soul}`;
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

/** Lighter Cloud mode — CLOUD.md only; guardrails injected separately in route. */
export async function loadCloudBundle(): Promise<string> {
  const read = async (file: string) =>
    stripFrontmatter(await fs.readFile(path.join(SOUL_DIR, file), "utf8"));
  return read("CLOUD.md");
}
