import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:color-mix(in_srgb,var(--cs-accent)_40%,transparent)] bg-[color:color-mix(in_srgb,var(--cs-accent-2)_35%,transparent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--cs-primary-2)]",
        className,
      )}
      {...props}
    />
  );
}
