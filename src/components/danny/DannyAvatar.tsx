import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Variant = "dark" | "cloud";

const sizes: Record<Size, { box: string; ring: string; text: string }> = {
  xs: { box: "h-7 w-7", ring: "ring-2", text: "text-xs" },
  sm: { box: "h-9 w-9", ring: "ring-2", text: "text-sm" },
  md: { box: "h-12 w-12", ring: "ring-2", text: "text-base" },
  lg: { box: "h-16 w-16", ring: "ring-[3px]", text: "text-xl" },
  xl: { box: "h-24 w-24", ring: "ring-[3px]", text: "text-3xl" },
};

type Props = {
  size?: Size;
  variant?: Variant;
  className?: string;
  pulse?: boolean;
  showOnline?: boolean;
};

export default function DannyAvatar({
  size = "md",
  variant = "dark",
  className,
  pulse = false,
  showOnline = false,
}: Props) {
  const s = sizes[size];
  const isCloud = variant === "cloud";

  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className={cn(
          s.box,
          s.ring,
          "flex items-center justify-center overflow-hidden rounded-full font-[family-name:var(--font-rethink)] font-extrabold",
          isCloud
            ? "bg-gradient-to-br from-indigo-100 to-white text-indigo-600 ring-indigo-300 ring-offset-2 ring-offset-white"
            : "bg-gradient-to-br from-[var(--dark-card)] to-[var(--dark-elevated)] text-[var(--pp-red)] ring-[var(--pp-red)] ring-offset-2 ring-offset-[var(--dark)]",
          s.text,
          pulse && "animate-pulse",
        )}
        aria-label="AI Danny"
      >
        D
      </div>
      {showOnline && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 bg-emerald-500",
            isCloud ? "border-white" : "border-[var(--dark)]",
          )}
          title="AI Danny online"
        />
      )}
    </div>
  );
}
