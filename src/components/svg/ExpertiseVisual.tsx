type Variant = "architecture" | "interface" | "data";

/* ── Card 1: load balancing + failover ── */
function ArchitectureDiagram() {
  return (
    <>
      {/* Load balancer */}
      <rect x="88" y="16" width="64" height="24" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <text x="120" y="32" textAnchor="middle" fontSize="9" fill="var(--primary-text-color)" fontFamily="var(--font-mono), monospace">
        LB
      </text>

      {/* Distribution lines */}
      <path d="M120,40 V56 M60,56 H180 M60,56 V72 M120,56 V72 M180,56 V72" fill="none" stroke="var(--border-color)" strokeWidth="1.5" />

      {/* Traffic dots flowing down */}
      <circle className="svg-flow-y" cx="60" cy="56" r="2.5" fill="var(--primary-text-color)" opacity="0.8" />
      <circle className="svg-flow-y" cx="120" cy="56" r="2.5" fill="var(--primary-text-color)" opacity="0.8" style={{ animationDelay: "0.5s" }} />
      <circle className="svg-flow-y" cx="180" cy="56" r="2.5" fill="var(--primary-text-color)" opacity="0.8" style={{ animationDelay: "1s" }} />

      {/* Server nodes */}
      <rect x="38" y="72" width="44" height="48" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <circle className="svg-blink-dot" cx="60" cy="86" r="3" fill="var(--primary-text-color)" opacity="0.8" />
      <line x1="48" y1="98" x2="72" y2="98" stroke="var(--border-color)" opacity="0.4" />
      <line x1="48" y1="106" x2="72" y2="106" stroke="var(--border-color)" opacity="0.4" />

      <rect x="98" y="72" width="44" height="48" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      {/* Failed node: X mark */}
      <path d="M114,82 L126,94 M126,82 L114,94" fill="none" stroke="var(--primary-text-color)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      <line x1="108" y1="102" x2="132" y2="102" stroke="var(--border-color)" opacity="0.2" />
      <line x1="108" y1="110" x2="132" y2="110" stroke="var(--border-color)" opacity="0.2" />

      <rect x="158" y="72" width="44" height="48" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <circle className="svg-blink-dot" cx="180" cy="86" r="3" fill="var(--primary-text-color)" opacity="0.8" style={{ animationDelay: "0.9s" }} />
      <line x1="168" y1="98" x2="192" y2="98" stroke="var(--border-color)" opacity="0.4" />
      <line x1="168" y1="106" x2="192" y2="106" stroke="var(--border-color)" opacity="0.4" />

      {/* Reroute arrow: traffic avoids the dead node */}
      <path className="svg-draw-loop" d="M92,64 C104,64 108,64 112,66" fill="none" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeDasharray="60" strokeLinecap="round" opacity="0.7" />

      <text x="120" y="142" textAnchor="middle" fontSize="9" fill="var(--fg-color)" fontFamily="var(--font-mono), monospace">
        one dies, traffic reroutes
      </text>
    </>
  );
}

/* ── Card 2: pixel grid + alignment guides + snapping cursor ── */
function InterfaceDiagram() {
  return (
    <>
      {/* Grid backdrop */}
    <g opacity="0.35">
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`v${i}`} x1={20 + i * 20} y1="14" x2={20 + i * 20} y2="126" stroke="var(--border-color)" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`h${i}`} x1="20" y1={16 + i * 20} x2="200" y2={16 + i * 20} stroke="var(--border-color)" strokeWidth="0.5" />
      ))}
    </g>

    {/* Component under construction */}
    <rect x="50" y="34" width="100" height="26" fill="var(--bg-color)" stroke="var(--primary-text-color)" strokeWidth="1.5" />
    <rect x="62" y="44" width="52" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.35" />

    <rect x="50" y="74" width="64" height="26" fill="var(--bg-color)" stroke="var(--primary-text-color)" strokeWidth="1.5" />
    <rect x="62" y="84" width="36" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.35" />

    {/* Alignment guides snapping to edges */}
    <line className="svg-guide" x1="50" y1="20" x2="50" y2="120" stroke="var(--primary-text-color)" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
    <line className="svg-guide" x1="150" y1="20" x2="150" y2="120" stroke="var(--primary-text-color)" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" style={{ animationDelay: "0.8s" }} />

    {/* Measurement callout */}
    <path d="M162,34 H178 M162,60 H178 M170,34 V60" fill="none" stroke="var(--border-color)" strokeWidth="1" />
    <text x="184" y="50" fontSize="8" fill="var(--fg-color)" fontFamily="var(--font-mono), monospace">
      26
    </text>

    {/* Cursor snapping to the guide */}
    <g className="svg-cursor-snap">
      <path d="M144,56 L144,74 L148.5,70 L151.5,77 L154.5,75.6 L151.5,69 L157,68.6 Z" fill="var(--primary-text-color)" />
    </g>

    <text x="120" y="142" textAnchor="middle" fontSize="9" fill="var(--fg-color)" fontFamily="var(--font-mono), monospace">
      pixels snap to the grid
    </text>
    </>
  );
}

/* ── Card 3: schema relations + indexed query path ── */
function DataDiagram() {
  return (
    <>
      {/* Table A */}
      <rect x="22" y="20" width="70" height="44" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <rect x="22" y="20" width="70" height="12" fill="var(--primary-text-color)" opacity="0.12" />
      <line x1="22" y1="32" x2="92" y2="32" stroke="var(--border-color)" strokeWidth="1" />
      <text x="28" y="30" fontSize="7" fill="var(--primary-text-color)" fontFamily="var(--font-mono), monospace">users</text>
      <line x1="28" y1="42" x2="70" y2="42" stroke="var(--border-color)" opacity="0.4" />
      <line x1="28" y1="50" x2="62" y2="50" stroke="var(--border-color)" opacity="0.4" />
      <line x1="28" y1="58" x2="74" y2="58" stroke="var(--border-color)" opacity="0.4" />

      {/* Table B */}
      <rect x="148" y="20" width="70" height="44" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <rect x="148" y="20" width="70" height="12" fill="var(--primary-text-color)" opacity="0.12" />
      <line x1="148" y1="32" x2="218" y2="32" stroke="var(--border-color)" strokeWidth="1" />
      <text x="154" y="30" fontSize="7" fill="var(--primary-text-color)" fontFamily="var(--font-mono), monospace">orders</text>
      <line x1="154" y1="42" x2="196" y2="42" stroke="var(--border-color)" opacity="0.4" />
      <line x1="154" y1="50" x2="188" y2="50" stroke="var(--border-color)" opacity="0.4" />
      <line x1="154" y1="58" x2="200" y2="58" stroke="var(--border-color)" opacity="0.4" />

      {/* Foreign key relation */}
      <line className="svg-flow-x" x1="92" y1="42" x2="148" y2="42" stroke="var(--border-color)" strokeWidth="1.5" />
      <text x="120" y="36" textAnchor="middle" fontSize="7" fill="var(--fg-color)" fontFamily="var(--font-mono), monospace">FK</text>

      {/* Index tree feeding a fast query */}
      <path d="M60,80 L40,98 M60,80 L60,98 M60,80 L80,98" fill="none" stroke="var(--border-color)" strokeWidth="1" />
      <circle cx="60" cy="76" r="5" fill="var(--bg-color)" stroke="var(--primary-text-color)" strokeWidth="1.5" />
      <circle cx="40" cy="102" r="5" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <circle cx="60" cy="102" r="5" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <circle className="svg-pulse-soft" cx="80" cy="102" r="5" fill="var(--primary-text-color)" opacity="0.35" />

      {/* Query arrow hitting the index */}
      <path className="svg-draw-loop" d="M150,76 H92" fill="none" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeDasharray="80" strokeLinecap="round" />
      <path d="M98,72 L92,76 L98,80" fill="none" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="158" y="80" fontSize="8" fill="var(--fg-color)" fontFamily="var(--font-mono), monospace">
        SELECT
      </text>

      <text x="120" y="142" textAnchor="middle" fontSize="9" fill="var(--fg-color)" fontFamily="var(--font-mono), monospace">
        schema first, speed follows
      </text>
    </>
  );
}

export default function ExpertiseVisual({ variant }: { variant: Variant }) {
  return (
    <svg
      viewBox="0 0 240 152"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        aspectRatio: "240 / 152",
        background: "var(--placeholder-bg)",
        border: "1px solid var(--border-color)",
        display: "block",
      }}
      aria-hidden
      focusable="false"
    >
      <rect width="240" height="152" fill="var(--placeholder-bg)" />
      {variant === "architecture" && <ArchitectureDiagram />}
      {variant === "interface" && <InterfaceDiagram />}
      {variant === "data" && <DataDiagram />}
    </svg>
  );
}
