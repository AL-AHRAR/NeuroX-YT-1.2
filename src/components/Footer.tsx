import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { footerNav } from "../data/nav";
import { scrollToId } from "../utils/scroll";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (href: string, section?: string) => {
    if (href === "/" && section) {
      if (location.pathname === "/") scrollToId(section);
      else navigate("/", { state: { scrollTo: section } });
      return;
    }
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path) {
        scrollToId(hash);
      } else {
        navigate(path, { state: { scrollTo: hash } });
      }
      return;
    }
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-7 text-[var(--fg-secondary)]">
              Lightweight video. Every device.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <FooterCol title="Product" items={footerNav.product} onNavigate={go} />
            <FooterCol title="Resources" items={footerNav.resources} onNavigate={go} />
            <FooterCol title="Company" items={footerNav.company} onNavigate={go} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-[13px] text-[var(--fg-tertiary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NeuroX YT. All rights reserved.</p>
          <p>Version 1.2 · Designed for Android</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: { label: string; href: string; section?: string }[];
  onNavigate: (href: string, section?: string) => void;
}) {
  return (
    <div>
      <p className="mb-4 text-[13px] font-medium tracking-[-0.01em] text-[var(--fg)]">{title}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              onClick={() => onNavigate(item.href, item.section)}
              className="text-[14px] text-[var(--fg-secondary)] transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
