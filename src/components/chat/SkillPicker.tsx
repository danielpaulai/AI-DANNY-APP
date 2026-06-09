"use client";

import { SKILLS, type SkillId } from "@/lib/agents/skills";
import { cn } from "@/lib/utils";

type Props = {
  active: SkillId;
  onChange: (id: SkillId) => void;
};

export default function SkillPicker({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.values(SKILLS).map((skill) => (
        <button
          key={skill.id}
          type="button"
          onClick={() => onChange(skill.id)}
          className={cn(
            "rounded-md border px-3.5 py-1.5 text-left transition-all duration-200",
            active === skill.id
              ? "border-[var(--pp-red)] bg-[var(--pp-red-dim)] text-[var(--text)]"
              : "border-[var(--dark-border)] bg-transparent text-[var(--text-dim)] hover:border-[var(--border-strong)] hover:text-[var(--text)]",
          )}
        >
          <span className="block font-[family-name:var(--font-jetbrains)] text-[10px] font-bold uppercase tracking-[0.08em]">
            {skill.label}
          </span>
        </button>
      ))}
    </div>
  );
}
