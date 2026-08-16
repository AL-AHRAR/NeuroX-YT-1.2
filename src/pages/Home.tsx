import { useEffect } from "react";
import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { ProductShowcase } from "../sections/ProductShowcase";
import { Stats } from "../sections/Stats";
import { WhyNeuroX } from "../sections/WhyNeuroX";
import { InteractiveDemo } from "../sections/InteractiveDemo";
import { DownloadSection } from "../sections/DownloadSection";
import { ChangelogPreview } from "../sections/ChangelogPreview";
import { FAQSection } from "../sections/FAQSection";
import { CTASection } from "../sections/CTASection";
import { setPageMeta } from "../utils/seo";
import { product } from "../data/product";

export function Home() {
  useEffect(() => {
    setPageMeta(product.seoTitle, product.seoDescription);
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <Stats />
      <WhyNeuroX />
      <InteractiveDemo />
      <DownloadSection />
      <ChangelogPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
