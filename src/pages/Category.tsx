import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Eye, Play } from "lucide-react";
import { categories } from "../data/categories";
import { categorySeo } from "../data/seo";
import { ScrollReveal } from "../components/ScrollReveal";
import { setPageMeta } from "../utils/seo";

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);

  useEffect(() => {
    if (category) {
      const seo = categorySeo(category.slug, category.title, category.description);
      setPageMeta(seo.title, seo.description);
    }
  }, [category]);

  if (!category) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pb-24 pt-32 text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">404</p>
        <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em]">Category not found.</h1>
        <Link
          to="/categories"
          className="mt-6 text-[14px] font-medium text-[var(--fg-secondary)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
        >
          Browse all categories
        </Link>
      </div>
    );
  }

  return (
    <div className="px-5 pb-28 pt-32 md:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <Link
            to="/categories"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--fg-secondary)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
          >
            <ArrowLeft size={14} />
            All categories
          </Link>
          <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            {category.tagline}
          </p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] sm:text-[56px]">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-7 text-[var(--fg-secondary)]">
            {category.description}
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {category.videos.map((video, i) => (
            <ScrollReveal key={video.title} delay={i * 0.04}>
              <article className="group flex items-center gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--border-strong)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                  <Play size={18} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-[16px] font-semibold tracking-[-0.02em]">{video.title}</h2>
                  <div className="mt-1.5 flex items-center gap-4 text-[12px] text-[var(--fg-tertiary)]">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} />
                      {video.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Eye size={12} />
                      {video.views}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12">
          <p className="text-[14px] leading-7 text-[var(--fg-tertiary)]">
            Watch {category.title.toLowerCase()} online free with NeuroX YT — the lightweight video
            platform and YouTube alternative for low-end Android devices. Fast video streaming,
            video sharing platform, and a free video platform for everyone.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}