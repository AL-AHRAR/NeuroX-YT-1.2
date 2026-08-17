import { type ReactNode } from "react";
import { cn } from "../utils/cn";

type MockupFrameProps = {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  glow?: boolean;
  loading?: "lazy" | "eager";
};

export function MockupFrame({
  children,
  src,
  alt,
  className,
  glow = true,
  loading = "lazy",
}: MockupFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_65%)] blur-2xl"
        />
      )}
      <div className="overflow-hidden rounded-[22px] border border-[var(--border-strong)] bg-[#0e0e12] shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-2 border-b border-white/8 bg-[#16161b] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto pr-10 text-[11px] font-medium tracking-[-0.01em] text-white/35">
            NeuroX YT 1.2
          </span>
        </div>
        {src ? (
          <img
            src={src}
            alt={alt ?? "NeuroX YT interface"}
            loading={loading}
            decoding="async"
            className="block w-full object-cover object-top"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}