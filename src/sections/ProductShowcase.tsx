import { useState } from "react";
import { showcaseSlides } from "../data/features";
import { images } from "../assets/media";
import { MockupFrame } from "../components/MockupFrame";
import { ScrollReveal } from "../components/ScrollReveal";
import { cn } from "../utils/cn";

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const slide = showcaseSlides[active];

  return (
    <section id="showcase" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Product
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Designed to be lived in.
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            A complete video app — home, search, player, and library — composed as one product.
          </p>
        </ScrollReveal>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {showcaseSlides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all",
                i === active
                  ? "bg-[var(--fg)] text-[var(--bg)]"
                  : "bg-[var(--bg-muted)] text-[var(--fg-secondary)] hover:text-[var(--fg)]",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <ScrollReveal className="mt-8">
          <MockupFrame src={images[slide.id]} alt={slide.caption} />
          <p className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-7 text-[var(--fg-secondary)]">
            {slide.caption}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
