import { useCallback, useState } from "react";
import { product } from "../data/product";

export type DownloadState = "idle" | "loading" | "success";

export function useDownload() {
  const [state, setState] = useState<DownloadState>("idle");

  const start = useCallback(() => {
    if (state === "loading") return;
    setState("loading");

    window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = `${import.meta.env.BASE_URL}${product.filePath}`;
      link.download = product.fileName;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setState("success");
      window.setTimeout(() => setState("idle"), 4200);
    }, 700);
  }, [state]);

  return { state, start };
}