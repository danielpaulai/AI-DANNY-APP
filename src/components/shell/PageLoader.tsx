import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  variant?: "dark" | "cloud";
  className?: string;
};

export default function PageLoader({
  label = "Loading…",
  variant = "dark",
  className,
}: Props) {
  const isCloud = variant === "cloud";

  return (
    <div
      className={cn(
        "flex min-h-[40vh] flex-col items-center justify-center gap-4 px-6",
        className,
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "h-14 w-14 animate-pulse rounded-full",
            isCloud ? "bg-indigo-100" : "bg-[var(--dark-card)]",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center font-[family-name:var(--font-rethink)] text-lg font-extrabold",
            isCloud ? "text-indigo-500" : "text-[var(--pp-red)]",
          )}
        >
          D
        </div>
      </div>
      <div className="w-full max-w-xs space-y-2">
        <div
          className={cn(
            "h-2 animate-pulse rounded",
            isCloud ? "bg-indigo-100" : "bg-[var(--dark-border)]",
          )}
        />
        <div
          className={cn(
            "mx-auto h-2 w-3/4 animate-pulse rounded",
            isCloud ? "bg-indigo-50" : "bg-[var(--dark-card)]",
          )}
        />
      </div>
      <p
        className={cn(
          "text-sm",
          isCloud ? "text-[var(--cloud-muted)]" : "text-[var(--text-dim)]",
        )}
      >
        {label}
      </p>
    </div>
  );
}
