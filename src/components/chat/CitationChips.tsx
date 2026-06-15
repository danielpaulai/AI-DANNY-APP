import { cn } from "@/lib/utils";

type Props = {
  citations: string[];
  variant?: "dark" | "cloud";
  className?: string;
};

export default function CitationChips({
  citations,
  variant = "dark",
  className,
}: Props) {
  if (!citations.length) return null;

  return (
    <div className={cn("mt-3 flex flex-wrap gap-1.5", className)}>
      <span
        className={cn(
          "text-[10px] font-bold uppercase tracking-wider",
          variant === "cloud"
            ? "text-[var(--cloud-muted)]"
            : "text-[var(--text-faint)]",
        )}
      >
        Frameworks:
      </span>
      {citations.map((title) => (
        <span
          key={title}
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-semibold",
            variant === "cloud"
              ? "border border-[var(--cloud-border)] bg-white/80 text-[var(--cloud-text)]"
              : "border border-[var(--dark-border)] bg-[var(--dark-elevated)] text-[var(--text-dim)]",
          )}
        >
          {title}
        </span>
      ))}
    </div>
  );
}
