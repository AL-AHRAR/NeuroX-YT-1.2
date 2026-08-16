import { useEffect } from "react";
import { changelog } from "../data/changelog";
import { ScrollReveal } from "../components/ScrollReveal";
import { setPageMeta } from "../utils/seo";
import { cn } from "../utils/cn";

export function ChangelogPage() {
  useEffect(() => {
    setPageMeta(
      "What’s new in NeuroX YT 1.2 — Changelog",
      "See what’s new in NeuroX YT 1.2: improved UI, faster performance, better stability, and a refined watching experience.",
    );
  }, []);

  return (
    <div className="px-5 pb-28 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Updates
          </p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] sm:text-[56px]">
            What’s new in NeuroX YT 1.2
          </h1>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            A living record of every release. Newer versions will appear at the top.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 border-l border-[var(--border)] pl-8">
          {changelog.map((entry, i) => (
            <ScrollReveal key={entry.version} delay={i * 0.05} className="relative mb-14 last:mb-0">
              <span
                className={cn(
                  "absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--bg)]",
                  entry.highlight ? "bg-[var(--accent)]" : "bg-[var(--fg-tertiary)]",
                )}
              />
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[12px] font-medium",
                    entry.highlight
                      ? "bg-[var(--fg)] text-[var(--bg)]"
                      : "bg-[var(--bg-muted)] text-[var(--fg-secondary)]",
                  )}
                >
                  Version {entry.version}
                </span>
                <span className="text-[13px] text-[var(--fg-tertiary)]">{entry.date}</span>
              </div>
              <h2 className="mt-4 text-[22px] font-semibold tracking-[-0.03em]">{entry.title}</h2>
              <ul className="mt-4 space-y-2">
                {entry.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-[var(--fg-secondary)]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
