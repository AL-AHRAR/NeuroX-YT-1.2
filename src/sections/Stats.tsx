import { stats } from "../data/features";
import { ScrollReveal } from "../components/ScrollReveal";

export function Stats() {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-12 shadow-[var(--shadow)] md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.06} className="text-center">
              <p className="text-[36px] font-semibold tracking-[-0.05em] text-[var(--fg)] sm:text-[44px]">
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
