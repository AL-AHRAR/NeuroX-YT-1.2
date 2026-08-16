import { useEffect } from "react";
import { Check, Download as DownloadIcon, LoaderCircle } from "lucide-react";
import { product, systemRequirements, installSteps } from "../data/product";
import { Button } from "../components/Button";
import { ScrollReveal } from "../components/ScrollReveal";
import { MockupFrame } from "../components/MockupFrame";
import { images } from "../assets/media";
import { useDownload } from "../hooks/useDownload";
import { setPageMeta } from "../utils/seo";

export function DownloadPage() {
  const { state, start } = useDownload();

  useEffect(() => {
    setPageMeta(
      "Download NeuroX YT 1.2 — Official Android APK",
      "Download the latest version of NeuroX YT 1.2 for Android. Fast setup, lightweight video app.",
    );
  }, []);

  return (
    <div className="mesh px-5 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            NeuroX YT 1.2
          </p>
          <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] sm:text-[56px]">
            Download the latest version.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-[var(--fg-secondary)]">
            Official Android APK. Version 1.2 — the current, supported release.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 rounded-[32px] border border-[var(--border)] bg-[var(--bg-elevated)] p-7 shadow-[var(--shadow-lg)] md:p-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <Stat label="Version" value="1.2" />
            <Stat label="Release" value="Latest" />
            <Stat label="Platform" value="Android" />
          </div>

          <div className="mt-8 grid gap-3 border-t border-[var(--border)] pt-8 text-[14px] text-[var(--fg-secondary)] sm:grid-cols-3">
            <p>
              File type <span className="block font-medium text-[var(--fg)]">{product.fileType}</span>
            </p>
            <p>
              Size <span className="block font-medium text-[var(--fg)]">{product.fileSize}</span>
            </p>
            <p>
              Released <span className="block font-medium text-[var(--fg)]">{product.releaseDate}</span>
            </p>
          </div>

          <Button
            size="xl"
            className="mt-10 w-full"
            onClick={start}
            disabled={state === "loading"}
            icon={
              state === "loading" ? (
                <LoaderCircle size={18} className="animate-spin" />
              ) : state === "success" ? (
                <Check size={18} />
              ) : (
                <DownloadIcon size={18} />
              )
            }
          >
            {state === "loading" ? "Preparing download…" : state === "success" ? "Download started" : "Download Now"}
          </Button>

          {state === "success" && (
            <p className="mt-4 text-center text-[14px] text-emerald-600 dark:text-emerald-400" role="status">
              Your download has started.
            </p>
          )}
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <MockupFrame src={images.workspace} alt="NeuroX YT 1.2 player preview" />
        </ScrollReveal>

        <ScrollReveal className="mt-20">
          <h2 className="text-[28px] font-semibold tracking-[-0.04em]">Installation</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {installSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
              >
                <span className="text-[13px] font-medium text-[var(--fg-tertiary)]">0{i + 1}</span>
                <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[var(--fg-secondary)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal className="mt-20">
          <h2 className="text-[28px] font-semibold tracking-[-0.04em]">System requirements</h2>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-[var(--border)]">
            <table className="w-full text-left text-[14px]">
              <tbody>
                {systemRequirements.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-[var(--bg-elevated)]" : "bg-[var(--bg)]"}>
                    <th className="w-36 px-5 py-3.5 font-medium text-[var(--fg)]">{row.label}</th>
                    <td className="px-5 py-3.5 text-[var(--fg-secondary)]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--fg-tertiary)]">{label}</p>
      <p className="mt-2 text-[28px] font-semibold tracking-[-0.04em]">{value}</p>
    </div>
  );
}
