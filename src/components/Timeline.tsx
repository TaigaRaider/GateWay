import ScrollReveal from "@/components/ScrollReveal";

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  desc: string;
  tags?: string[];
};

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {entries.map((e, i) => (
        <ScrollReveal key={e.role + e.org} delay={i * 0.06}>
          <article className="timeline-row">
            <span className="timeline-period" aria-hidden>
              {e.period}
            </span>
            <span className="timeline-node" aria-hidden />
            <div className="timeline-body">
              <h3>{e.role}</h3>
              <p className="timeline-org">{e.org}</p>
              <p className="timeline-desc">{e.desc}</p>
              {e.tags && (
                <div className="flex flex-wrap gap-2" style={{ marginTop: "0.75rem" }}>
                  {e.tags.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
