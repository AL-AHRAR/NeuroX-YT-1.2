import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { categories } from "../data/categories";
import { pageSeo } from "../data/seo";
import { ScrollReveal } from "../components/ScrollReveal";
import { setPageMeta } from "../utils/seo";

export function Categories() {
  useEffect(() => {
    setPageMeta(pageSeo.categories.title, pageSeo.categories.description);
  }, []);

  return (
    <div className="px-5 pb-28 pt-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Categories
          </p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] sm:text-[56px]">
            Browse video categories.
          </h1>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            Watch videos online free across every category — the lightweight video platform
            and YouTube alternative for low-end devices.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 0.05}>
              <Link
                to={`/category/${cat.slug}`}
                className="group block h-full rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-7 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                  <Play size={20} strokeWidth={1.75} />
                </div>
                <h2 className="mt-5 text-[18px] font-semibold tracking-[-0.03em]">{cat.title}</h2>
                <p className="mt-1 text-[13px] font-medium text-[var(--fg-tertiary)]">{cat.tagline}</p>
                <p className="mt-3 text-[15px] leading-7 text-[var(--fg-secondary)]">{cat.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}