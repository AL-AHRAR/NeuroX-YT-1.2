import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { MockupFrame } from "../components/MockupFrame";
import { Particles } from "../components/Particles";
import { images } from "../assets/media";
import { scrollToId } from "../utils/scroll";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="top" className="relative overflow-hidden mesh">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <Particles />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-[90px] animate-pulse-soft"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-3 py-1 text-[12px] font-medium text-[var(--fg-secondary)] shadow-[var(--shadow)] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now available · Version 1.2
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-text text-[48px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[64px] md:text-[80px]"
          >
            Meet NeuroX YT 1.2
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[20px] font-medium tracking-[-0.03em] text-[var(--fg)] sm:text-[24px]"
          >
            A smarter way to watch videos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-[var(--fg-secondary)] sm:text-[17px]"
          >
            The lightweight video app that keeps up with you — fast, private, and
            designed with the same care as the work you put into it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" icon={<Download size={17} />} onClick={() => navigate("/download")}>
              Download NeuroX YT 1.2
            </Button>
            <Button size="lg" variant="secondary" icon={<ArrowRight size={17} />} onClick={() => scrollToId("features")}>
              Explore NeuroX YT
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="animate-float [perspective:2000px]">
            <div className="origin-center [transform:rotateX(10deg)]">
              <MockupFrame src={images.dashboard} alt="NeuroX YT 1.2 home screen" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-8 -bottom-6 h-24 rounded-[50%] bg-black/20 blur-2xl dark:bg-black/50" />
        </motion.div>
      </div>
    </section>
  );
}
