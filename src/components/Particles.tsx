export function Particles() {
  const dots = [
    { left: "12%", top: "22%", size: 2, delay: "0s" },
    { left: "22%", top: "48%", size: 3, delay: "1.2s" },
    { left: "38%", top: "18%", size: 2, delay: "0.4s" },
    { left: "68%", top: "28%", size: 2, delay: "1.8s" },
    { left: "78%", top: "52%", size: 3, delay: "0.7s" },
    { left: "88%", top: "20%", size: 2, delay: "2.1s" },
    { left: "8%", top: "70%", size: 2, delay: "1.4s" },
    { left: "54%", top: "12%", size: 2, delay: "0.9s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((dot) => (
        <span
          key={`${dot.left}-${dot.top}`}
          className="absolute rounded-full bg-[var(--accent)]/50 animate-pulse-soft"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}
