import { FormEvent, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { demoSeed, mockReply, suggestions, type DemoMessage } from "../data/demo";
import { ScrollReveal } from "../components/ScrollReveal";
import { cn } from "../utils/cn";

export function InteractiveDemo() {
  const [messages, setMessages] = useState<DemoMessage[]>(demoSeed);
  const [value, setValue] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(10);

  const push = (role: DemoMessage["role"], content: string) => {
    idRef.current += 1;
    setMessages((prev) => [...prev, { id: String(idRef.current), role, content }]);
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    push("user", trimmed);
    setValue("");
    setTyping(true);
    window.setTimeout(() => {
      push("assistant", mockReply(trimmed));
      setTyping(false);
    }, 700 + Math.min(trimmed.length * 12, 900));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(value);
  };

  return (
    <section id="demo" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--fg-tertiary)]">
            Try it
          </p>
          <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Search NeuroX YT.
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[var(--fg-secondary)]">
            A living preview of the search. Type a topic — or start with “Search NeuroX YT”.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[#111114] shadow-[var(--shadow-lg)]">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles size={15} />
                <span className="text-[13px] font-medium tracking-[-0.01em]">NeuroX YT 1.2</span>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                Live preview
              </span>
            </div>

            <div
              ref={listRef}
              className="scrollbar-thin flex h-[380px] flex-col gap-4 overflow-y-auto px-5 py-5"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[14px] leading-6",
                      msg.role === "user"
                        ? "bg-white text-[#111113]"
                        : "bg-white/8 text-white/88",
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-white/8 px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70 [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70 [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70" />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/8 px-4 pb-4 pt-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-white/60 transition hover:border-white/20 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form onSubmit={onSubmit} className="flex items-center gap-2 rounded-full bg-white/6 p-1.5 ring-1 ring-white/10">
                <label htmlFor="demo-input" className="sr-only">
                  Search NeuroX YT
                </label>
                <input
                  id="demo-input"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search videos…"
                  className="h-10 flex-1 bg-transparent px-3 text-[14px] text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={!value.trim() || typing}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111113] transition enabled:hover:scale-105 disabled:opacity-30"
                >
                  <ArrowUp size={16} />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
