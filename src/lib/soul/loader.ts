import fs from "node:fs/promises";
import path from "node:path";

const SOUL_DIR = path.join(process.cwd(), "content", "soul");

export async function loadSoulBundle(): Promise<string> {
  const files = ["SOUL.md", "STYLE.md"];
  const parts = await Promise.all(
    files.map(async (file) => {
      const txt = await fs.readFile(path.join(SOUL_DIR, file), "utf8");
      return `<!-- ${file} -->\n${txt}`;
    }),
  );
  return parts.join("\n\n");
}
