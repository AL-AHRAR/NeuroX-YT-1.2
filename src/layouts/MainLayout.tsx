import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTheme } from "../hooks/useTheme";
import { scrollToId } from "../utils/scroll";

export function MainLayout() {
  const { mode, setMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      requestAnimationFrame(() => {
        setTimeout(() => scrollToId(id), 60);
      });
      return;
    }
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToId(id), 60);
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.state]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <button
        type="button"
        className="skip-link"
        onClick={() => document.getElementById("main")?.focus()}
      >
        Skip to content
      </button>
      <div className="noise" aria-hidden />
      <Navbar theme={mode} onThemeChange={setMode} />
      <main id="main" tabIndex={-1} className="outline-none">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
