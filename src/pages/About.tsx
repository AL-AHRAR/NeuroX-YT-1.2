import { useEffect } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { images } from "../assets/media";
import { setPageMeta } from "../utils/seo";

const principles = [
  {
    title: "Quiet power",
    body: "Watching should feel like a well-made instrument, not a spectacle. NeuroX YT is designed to recede until the moment it is useful.",
  },
  {
    title: "Light by design",
    body: "Every megabyte counts. NeuroX YT is built to run beautifully on the devices everyone else left behind.",
  },
  {
    title: "Craft over novelty",
    body: "We ship fewer surfaces and finish them. Typography, timing, and empty space are treated as part of the product.",
  },
];

export function About() {
  useEffect(() => {
    setPageMeta(
      "About NeuroX YT — The Lightweight Video Platform Story",
      "NeuroX YT is a free video platform and YouTube alternative built for low-end Android devices. Fast video streaming, video sharing platform, watch videos online free.",
    );
  }, []);

  return (
    <div className="px-5 pb-28 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            About
          </p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] sm:text-[56px]">
            Built for people who care how software feels.
          </h1>
          <p className="mt-6 text-[18px] leading-8 text-[var(--fg-secondary)]">
            NeuroX YT began as a simple idea: a video app that respects attention and
            hardware. Version 1.2 is the first release that feels complete — fast enough to disappear,
            considered enough to stay.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <img
            src={images.orb}
            alt="A glass orb filled with indigo and cyan light, representing NeuroX YT"
            loading="lazy"
            decoding="async"
            className="h-72 w-full rounded-[28px] object-cover shadow-[var(--shadow-lg)] sm:h-96"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-16 space-y-5 text-[16px] leading-8 text-[var(--fg-secondary)]">
          <p>
            Most video apps are collections of features assembled around a catalog. NeuroX YT is assembled
            around a person. The home, the player, and the library share one language of
            motion, one set of materials, one idea of what “done” looks like.
          </p>
          <p>
            We believe watching should be quieter. Fewer tabs. Fewer dashboards.
            More moments where the right video appears at the right time — and then gets out of
            the way.
          </p>
        </ScrollReveal>

        <div className="mt-20 space-y-4">
          {principles.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <article className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
                <h2 className="text-[20px] font-semibold tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-2 text-[15px] leading-7 text-[var(--fg-secondary)]">{item.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20" >
          <div id="contact" className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
            <h2 className="text-[24px] font-semibold tracking-[-0.03em]">Contact</h2>
            <p className="mt-3 text-[15px] leading-7 text-[var(--fg-secondary)]">
              For press, partnerships, or product questions, write to{" "}
              <a className="font-medium text-[var(--fg)] underline-offset-4 hover:underline" href="mailto:hello@neuroxyt.app">
                hello@neuroxyt.app
              </a>
              . Support is available at{" "}
              <a className="font-medium text-[var(--fg)] underline-offset-4 hover:underline" href="mailto:support@neuroxyt.app">
                support@neuroxyt.app
              </a>
              .
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <div id="privacy" className="rounded-[28px] border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
            <h2 className="text-[24px] font-semibold tracking-[-0.03em]">Privacy</h2>
            <p className="mt-3 text-[15px] leading-7 text-[var(--fg-secondary)]">
              NeuroX YT 1.2 is designed to keep watch history and saved videos on your device. We do not sell
              personal data. Optional network features are off until you turn them on. This page will
              always describe how the product treats your data.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}