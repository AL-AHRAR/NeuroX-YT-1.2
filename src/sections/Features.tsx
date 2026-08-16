import { Brain, Gauge, Lock, PanelsTopLeft, Sparkles, Workflow } from "lucide-react";
import { features } from "../data/features";
import { ScrollReveal } from "../components/ScrollReveal";

const icons = [Brain, PanelsTopLeft, Gauge, Lock, Workflow, Sparkles];

export function Features() {
  return (
    <section id="features" className="relative px-5 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Features
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] text-[var(--fg)] sm:text-[48px]">
            Light by design.
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            Every part of NeuroX YT 1.2 is built to disappear into the watch — until the moment you need it.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={feature.id} delay={i * 0.05}>
                <article className="group h-full rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-7 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em]">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--fg-secondary)]">{feature.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
