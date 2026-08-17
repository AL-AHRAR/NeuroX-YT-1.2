import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { setPageMeta } from "../utils/seo";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageMeta(
      "Page Not Found — NeuroX YT Video Platform",
      "The page you're looking for doesn't exist. Head back to NeuroX YT and continue watching videos online free.",
    );
  }, []);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pb-24 pt-32 text-center">
      <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">404</p>
      <h1 className="mt-3 text-[40px] font-semibold tracking-[-0.045em]">This page doesn’t exist.</h1>
      <p className="mt-3 max-w-md text-[16px] text-[var(--fg-secondary)]">
        The link may be outdated. Head back to NeuroX YT and continue from there.
      </p>
      <Button className="mt-8" onClick={() => navigate("/")}>
        Back to home
      </Button>
    </div>
  );
}
