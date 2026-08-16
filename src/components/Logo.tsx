import { cn } from "../utils/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
};

export function Logo({ className, markClassName, wordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-[10px]",
          markClassName,
        )}
        aria-hidden
      >
        <span className="absolute inset-0 bg-gradient-to-br from-[#7c5cff] via-[#5b2ed4] to-[#1f1b3a]" />
        <span className="absolute inset-px rounded-[9px] bg-gradient-to-br from-white/20 to-transparent" />
        <svg viewBox="0 0 24 24" className="relative h-[18px] w-[18px] text-white" fill="none">
          <path
            d="M6 5.5v13M18 5.5v13M6.8 6.2 17.2 17.8"
            stroke="currentColor"
            strokeWidth="2.15"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="1.7" fill="currentColor" />
        </svg>
      </span>
      {wordmark && (
        <span className="text-[17px] font-semibold tracking-[-0.03em] text-[var(--fg)]">NeuroX YT</span>
      )}
    </span>
  );
}
