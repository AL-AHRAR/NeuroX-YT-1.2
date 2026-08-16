import { Link } from "react-router-dom";
import { faqs } from "../data/faq";
import { Accordion } from "../components/Accordion";
import { ScrollReveal } from "../components/ScrollReveal";

export function FAQSection() {
  return (
    <section id="faq" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            FAQ
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Questions, answered.
          </h2>
        </ScrollReveal>
        <ScrollReveal className="mt-10">
          <Accordion items={faqs.slice(0, 7)} />
          <div className="mt-6 text-center">
            <Link
              to="/faq"
              className="text-[14px] font-medium text-[var(--fg-secondary)] underline-offset-4 hover:text-[var(--fg)] hover:underline"
            >
              View all questions
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
