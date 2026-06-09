import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

const sizes = {
  sm: { dot: "h-5 w-5 text-[9px] rounded-[4px]", name: "text-sm", tag: "text-[10px]" },
  md: { dot: "h-7 w-7 text-[11px] rounded-[5px]", name: "text-base", tag: "text-[11px]" },
  lg: { dot: "h-9 w-9 text-xs rounded-[5px]", name: "text-lg", tag: "text-xs" },
};

export default function BrandMark({
  size = "md",
  showTagline = false,
  className,
}: Props) {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center bg-[var(--pp-red)] font-[family-name:var(--font-rethink)] font-extrabold text-white",
          s.dot,
        )}
        aria-hidden
      >
        PP
      </div>
      <div>
        <p
          className={cn(
            "font-[family-name:var(--font-rethink)] font-extrabold leading-none tracking-tight text-[var(--text)]",
            s.name,
          )}
        >
          Purely Personal
        </p>
        {showTagline && (
          <p
            className={cn(
              "mt-1 font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.18em] text-[var(--text-faint)]",
              s.tag,
            )}
          >
            Branding
          </p>
        )}
      </div>
    </div>
  );
}
