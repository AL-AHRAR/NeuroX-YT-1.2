import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { useScrolled } from "../hooks/useScroll";
import { type ThemeMode } from "../hooks/useTheme";
import { mainNav } from "../data/nav";
import { scrollToId } from "../utils/scroll";
import { cn } from "../utils/cn";

type NavbarProps = {
  theme: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
};

export function Navbar({ theme, onThemeChange }: NavbarProps) {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string, section?: string) => {
    setOpen(false);
    if (href === "/" && section) {
      if (location.pathname === "/") {
        scrollToId(section);
      } else {
        navigate("/", { state: { scrollTo: section } });
      }
      return;
    }
    if (href === location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass shadow-[0_1px_0_var(--border)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" onClick={() => go("/", "top")} aria-label="NeuroX YT home" className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => go(item.href, item.section)}
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-[var(--fg-secondary)] transition-colors hover:bg-[var(--bg-muted)] hover:text-[var(--fg)]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-1.5">
          <ThemeToggle mode={theme} onChange={onThemeChange} />
          <div className="hidden sm:block">
            <Button size="sm" onClick={() => go("/download")}>
              Download NeuroX YT 1.2
            </Button>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--fg)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-[var(--glass)] transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {mainNav.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => go(item.href, item.section)}
              className="rounded-2xl px-3 py-3 text-left text-[16px] font-medium text-[var(--fg)]"
            >
              {item.label}
            </button>
          ))}
          <Button className="mt-2 w-full" onClick={() => go("/download")}>
            Download NeuroX YT 1.2
          </Button>
        </nav>
      </div>
    </header>
  );
}
