import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ScrollReveal } from "../components/ScrollReveal";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <ScrollReveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#0c0c10] px-6 py-20 text-center text-white md:px-16 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.18),transparent_45%)]"
          />
          <div className="relative">
            <h2 className="text-[36px] font-semibold tracking-[-0.045em] sm:text-[52px]">
              Ready to experience NeuroX YT?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] leading-7 text-white/65">
              Download NeuroX YT 1.2 for Android and step into a lighter, faster way to watch videos.
            </p>
            <div className="mt-9 flex justify-center">
              <Button size="xl" variant="inverse" icon={<Download size={18} />} onClick={() => navigate("/download")}>
                Download NeuroX YT 1.2
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
