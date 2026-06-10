import Image from "next/image";
import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, { box: string; ring: string; img: number }> = {
  xs: { box: "h-7 w-7", ring: "ring-2", img: 28 },
  sm: { box: "h-9 w-9", ring: "ring-2", img: 36 },
  md: { box: "h-12 w-12", ring: "ring-2", img: 48 },
  lg: { box: "h-16 w-16", ring: "ring-[3px]", img: 64 },
  xl: { box: "h-24 w-24", ring: "ring-[3px]", img: 96 },
};

type Props = {
  size?: Size;
  className?: string;
  pulse?: boolean;
  showOnline?: boolean;
};

export default function DannyAvatar({
  size = "md",
  className,
  pulse = false,
  showOnline = false,
}: Props) {
  const s = sizes[size];

  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className={cn(
          s.box,
          s.ring,
          "overflow-hidden rounded-full ring-[var(--pp-red)] ring-offset-2 ring-offset-[var(--dark)]",
          pulse && "animate-pulse",
        )}
      >
        <Image
          src="/avatars/danny.png"
          alt="AI Danny"
          width={s.img}
          height={s.img}
          className="h-full w-full object-cover object-top"
          priority={size === "lg" || size === "xl"}
        />
      </div>
      {showOnline && (
        <span
          className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[var(--dark)] bg-emerald-500"
          title="AI Danny online"
        />
      )}
    </div>
  );
}
