import ScrollReveal from "@/components/ScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand the real problem before touching a keyboard — constraints, users, failure modes, and what success actually looks like.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Design the system on paper first: data models, boundaries, trade-offs. The cheapest bugs are the ones never written.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Ship in vertical slices — thin end-to-end paths that work early, then deepen. Clean code is the only kind that ships.",
  },
  {
    num: "04",
    title: "Ship & Iterate",
    desc: "Deploy with CI/CD, watch real usage, and refine. Systems that hold weight are measured under load, not in demos.",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid var(--border-color)" }}>
      {STEPS.map((s, i) => (
        <ScrollReveal key={s.num} delay={i * 0.08}>
          <div
            className="service-step flex h-full flex-col gap-3"
            style={{
              padding: "2rem 1.5rem",
              borderRight: "1px solid var(--border-color)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "0.3em",
                color: "var(--primary-text-color)",
                opacity: 0.5,
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {s.num}
            </span>
            <h3
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--primary-text-color)",
              }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-color)", lineHeight: 1.6 }}>
              {s.desc}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
