import { Check, Download, LoaderCircle } from "lucide-react";
import { product, systemRequirements } from "../data/product";
import { Button } from "../components/Button";
import { ScrollReveal } from "../components/ScrollReveal";
import { useDownload } from "../hooks/useDownload";

export function DownloadSection() {
  const { state, start } = useDownload();

  return (
    <section id="download" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Download
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Download NeuroX YT 1.2
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            The latest Android build. One APK. Ready in under a minute.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-lg)] md:p-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Meta label="Version" value={product.version} />
              <Meta label="Platform" value={product.platform} />
              <Meta label="File type" value={product.fileType} />
              <Meta label="Release" value={product.releaseLabel} />
              <Meta label="Released" value={product.releaseDate} />
              <Meta label="Size" value={product.fileSize} />
            </div>

            <Button
              size="xl"
              className="mt-8 w-full"
              onClick={start}
              disabled={state === "loading"}
              icon={
                state === "loading" ? (
                  <LoaderCircle size={18} className="animate-spin" />
                ) : state === "success" ? (
                  <Check size={18} />
                ) : (
                  <Download size={18} />
                )
              }
            >
              {state === "loading"
                ? "Preparing download…"
                : state === "success"
                  ? "Download started"
                  : "Download NeuroX YT 1.2"}
            </Button>

            {state === "success" && (
              <p className="mt-4 text-center text-[14px] text-emerald-600 dark:text-emerald-400" role="status">
                Your download has started.
              </p>
            )}

            <p className="mt-4 text-center text-[12px] text-[var(--fg-tertiary)]">
              {product.fileName} · {product.checksum}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h3 className="text-center text-[22px] font-semibold tracking-[-0.03em]">System Requirements</h3>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {systemRequirements.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-4"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--fg-tertiary)]">
                  {item.label}
                </p>
                <p className="mt-1 text-[15px] text-[var(--fg)]">{item.value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] uppercase tracking-[0.1em] text-[var(--fg-tertiary)]">{label}</p>
      <p className="mt-1 text-[16px] font-medium tracking-[-0.02em]">{value}</p>
    </div>
  );
}
