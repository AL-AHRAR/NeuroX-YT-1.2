import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg" | "xl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--fg)] text-[var(--bg)] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_10px_24px_rgba(15,15,20,0.16)] hover:opacity-90 active:scale-[0.98]",
  secondary:
    "bg-[var(--bg-elevated)] text-[var(--fg)] hairline shadow-[var(--shadow)] hover:bg-[var(--bg-muted)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--fg)] hover:bg-[var(--bg-muted)] active:scale-[0.98]",
  inverse:
    "bg-white text-[#111113] shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-white/90 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px] gap-1.5",
  md: "h-11 px-5 text-[14px] gap-2",
  lg: "h-12 px-6 text-[15px] gap-2",
  xl: "h-14 px-8 text-[16px] gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
