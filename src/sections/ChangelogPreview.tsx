import { Link } from "react-router-dom";
import { changelog } from "../data/changelog";
import { ScrollReveal } from "../components/ScrollReveal";

export function ChangelogPreview() {
  const latest = changelog[0];

  return (
    <section id="updates" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
              What’s new
            </p>
            <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.04em] sm:text-[40px]">
              What’s new in NeuroX YT 1.2
            </h2>
          </div>
          <Link
            to="/changelog"
            className="text-[14px] font-medium text-[var(--fg-secondary)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
          >
            Full changelog
          </Link>
        </ScrollReveal>

        <ScrollReveal className="mt-10 rounded-[32px] border border-[var(--border)] bg-[var(--bg-elevated)] p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--fg)] px-3 py-1 text-[12px] font-medium text-[var(--bg)]">
              Version {latest.version}
            </span>
            <span className="text-[13px] text-[var(--fg-tertiary)]">{latest.date}</span>
          </div>
          <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em]">{latest.title}</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {latest.items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-6 text-[var(--fg-secondary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
