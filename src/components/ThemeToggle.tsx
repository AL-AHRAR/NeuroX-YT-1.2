import { useEffect, useRef, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { type ThemeMode } from "../hooks/useTheme";
import { cn } from "../utils/cn";

type ThemeToggleProps = {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
};

const options: { id: ThemeMode; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "System", icon: Monitor },
];

export function ThemeToggle({ mode, onChange }: ThemeToggleProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Active = options.find((o) => o.id === mode)?.icon ?? Monitor;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Theme: ${mode}`}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--fg-secondary)] transition-colors hover:bg-[var(--bg-muted)] hover:text-[var(--fg)]"
      >
        <Active size={18} strokeWidth={1.75} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Color theme"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-40 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-1.5 shadow-[var(--shadow-lg)]"
        >
          {options.map((option) => {
            const Icon = option.icon;
            const selected = mode === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(option.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13px] transition-colors",
                  selected
                    ? "bg-[var(--bg-muted)] text-[var(--fg)]"
                    : "text-[var(--fg-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--fg)]",
                )}
              >
                <Icon size={15} strokeWidth={1.75} />
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
