import { useEffect } from "react";
import { faqs } from "../data/faq";
import { Accordion } from "../components/Accordion";
import { ScrollReveal } from "../components/ScrollReveal";
import { setPageMeta } from "../utils/seo";

export function FAQPage() {
  useEffect(() => {
    setPageMeta(
      "NeuroX YT FAQ — Free Video Platform Questions Answered",
      "Answers about NeuroX YT — the lightweight video platform. Installation, Android requirements, privacy, updates, and how to watch videos online free.",
    );
  }, []);

  return (
    <div className="px-5 pb-28 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            FAQ
          </p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] sm:text-[56px]">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            Everything you need to know about NeuroX YT 1.2 — what it is, how to install it, and what comes next.
          </p>
        </ScrollReveal>
        <ScrollReveal className="mt-10">
          <Accordion items={faqs} />
        </ScrollReveal>
      </div>
    </div>
  );
}
