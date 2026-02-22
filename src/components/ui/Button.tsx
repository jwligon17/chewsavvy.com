import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ink" | "forest";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center rounded-md font-bold opacity-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent)] disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--cs-primary)] !text-white hover:!text-white focus-visible:!text-white visited:!text-white hover:bg-[var(--cs-primary-2)] focus-visible:outline-[var(--cs-accent-2)]",
  secondary:
    "border border-[var(--cs-primary)] bg-transparent text-[var(--cs-primary)] hover:bg-[color:color-mix(in_srgb,var(--cs-accent-2)_22%,transparent)]",
  ghost: "text-[var(--cs-primary-2)] hover:bg-[color:color-mix(in_srgb,var(--cs-accent-2)_20%,transparent)]",
  ink: "bg-[var(--cs-primary)] !text-white hover:!text-white focus-visible:!text-white visited:!text-white hover:bg-[var(--cs-primary-3)] focus-visible:outline-[var(--cs-accent-2)]",
  forest:
    "bg-[var(--cs-primary)] !text-white hover:!text-white focus-visible:!text-white visited:!text-white hover:bg-[var(--cs-primary-3)] focus-visible:outline-[var(--cs-accent-2)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
