import { whyPoints } from "../data/features";
import { ScrollReveal } from "../components/ScrollReveal";

export function WhyNeuroX() {
  return (
    <section id="why" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Why NeuroX YT?
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Built around the way you watch.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-7 text-[var(--fg-secondary)]">
            Most tools ask you to adapt. NeuroX YT is shaped around attention, pace, and the quiet
            confidence of software that simply works.
          </p>
        </ScrollReveal>

        <div className="space-y-3 lg:col-span-7">
          {whyPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.04}>
              <article className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--border-strong)] md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{point.title}</h3>
                  <span className="text-[13px] tabular-nums text-[var(--fg-tertiary)]">0{i + 1}</span>
                </div>
                <p className="mt-3 max-w-lg text-[15px] leading-7 text-[var(--fg-secondary)]">{point.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
