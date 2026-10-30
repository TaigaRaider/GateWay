export default function PhilosophyDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        <pattern id="phil-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="var(--primary-text-color)" opacity="0.13" />
        </pattern>
      </defs>

      {/* Canvas */}
      <rect width="480" height="360" fill="var(--placeholder-bg)" />
      <rect x="24" y="168" width="432" height="168" fill="url(#phil-dots)" />

      {/* ─── Surface layer: the UI you see ─── */}
      <text
        x="130"
        y="16"
        fontSize="10"
        letterSpacing="2.5"
        fill="var(--primary-text-color)"
        opacity="0.55"
        fontFamily="var(--font-mono), monospace"
      >
        WHAT YOU SEE
      </text>
      <rect x="130" y="26" width="220" height="86" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <line x1="130" y1="46" x2="350" y2="46" stroke="var(--border-color)" strokeWidth="1" opacity="0.5" />
      <circle cx="144" cy="36" r="2.5" fill="var(--primary-text-color)" opacity="0.45" />
      <circle cx="156" cy="36" r="2.5" fill="var(--primary-text-color)" opacity="0.45" />
      <circle cx="168" cy="36" r="2.5" fill="var(--primary-text-color)" opacity="0.45" />
      <rect x="146" y="58" width="80" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.3" />
      <rect x="146" y="72" width="60" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.3" />
      <rect x="146" y="86" width="70" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.3" />
      <rect x="250" y="58" width="84" height="40" fill="none" stroke="var(--border-color)" strokeDasharray="4 4" opacity="0.5" />
      <line x1="250" y1="58" x2="334" y2="98" stroke="var(--border-color)" opacity="0.25" />
      <line x1="334" y1="58" x2="250" y2="98" stroke="var(--border-color)" opacity="0.25" />

      {/* Waterline: the boundary between layers */}
      <line x1="24" y1="150" x2="456" y2="150" stroke="var(--border-color)" strokeDasharray="6 8" opacity="0.3" />

      {/* Dependency connectors — support flows upward */}
      <line x1="170" y1="112" x2="170" y2="186" stroke="var(--border-color)" strokeDasharray="3 5" opacity="0.55" />
      <line x1="240" y1="112" x2="240" y2="186" stroke="var(--border-color)" strokeDasharray="3 5" opacity="0.55" />
      <line x1="310" y1="112" x2="310" y2="186" stroke="var(--border-color)" strokeDasharray="3 5" opacity="0.55" />
      <circle className="svg-dot-rise" cx="170" cy="180" r="3.5" fill="var(--primary-text-color)" opacity="0.8" />
      <circle className="svg-dot-rise" cx="240" cy="180" r="3.5" fill="var(--primary-text-color)" opacity="0.8" style={{ animationDelay: "0.7s" }} />
      <circle className="svg-dot-rise" cx="310" cy="180" r="3.5" fill="var(--primary-text-color)" opacity="0.8" style={{ animationDelay: "1.4s" }} />

      {/* ─── Structure layer: what holds it up ─── */}
      {/* Core: the system kernel */}
      <circle
        className="svg-spin-slow"
        cx="240"
        cy="232"
        r="44"
        fill="none"
        stroke="var(--border-color)"
        strokeDasharray="4 8"
        opacity="0.5"
      />
      <polygon
        points="270,232 255,258 225,258 210,232 225,206 255,206"
        fill="var(--bg-color)"
        stroke="var(--border-color)"
        strokeWidth="1.5"
      />
      <circle className="svg-pulse-soft" cx="240" cy="232" r="9" fill="var(--primary-text-color)" opacity="0.3" />

      {/* Data store */}
      <path
        d="M56,208 A32,8 0 0 1 120,208 L120,244 A32,8 0 0 1 56,244 Z"
        fill="var(--bg-color)"
        stroke="var(--border-color)"
        strokeWidth="1.5"
      />
      <ellipse cx="88" cy="208" rx="32" ry="8" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <line x1="62" y1="222" x2="114" y2="222" stroke="var(--border-color)" opacity="0.35" />
      <line x1="62" y1="234" x2="114" y2="234" stroke="var(--border-color)" opacity="0.35" />

      {/* Service rack */}
      <rect x="330" y="196" width="78" height="58" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <line x1="330" y1="215" x2="408" y2="215" stroke="var(--border-color)" opacity="0.5" />
      <line x1="330" y1="234" x2="408" y2="234" stroke="var(--border-color)" opacity="0.5" />
      <circle className="svg-blink-dot" cx="342" cy="205" r="3" fill="var(--primary-text-color)" opacity="0.7" />
      <circle className="svg-blink-dot" cx="342" cy="224.5" r="3" fill="var(--primary-text-color)" opacity="0.7" style={{ animationDelay: "0.6s" }} />
      <circle className="svg-blink-dot" cx="342" cy="243.5" r="3" fill="var(--primary-text-color)" opacity="0.7" style={{ animationDelay: "1.2s" }} />
      <line x1="354" y1="205" x2="396" y2="205" stroke="var(--primary-text-color)" opacity="0.25" />
      <line x1="354" y1="224.5" x2="396" y2="224.5" stroke="var(--primary-text-color)" opacity="0.25" />
      <line x1="354" y1="243.5" x2="396" y2="243.5" stroke="var(--primary-text-color)" opacity="0.25" />

      {/* Event queue */}
      <rect x="196" y="296" width="88" height="10" rx="2" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <rect x="202" y="312" width="76" height="10" rx="2" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
      <rect x="208" y="328" width="64" height="10" rx="2" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />

      {/* Structure edges */}
      <line x1="210" y1="232" x2="122" y2="232" stroke="var(--border-color)" strokeWidth="1.5" />
      <line x1="270" y1="232" x2="328" y2="232" stroke="var(--border-color)" strokeWidth="1.5" />
      <line x1="240" y1="258" x2="240" y2="292" stroke="var(--border-color)" strokeWidth="1.5" />
      <path d="M235,287 L240,294 L245,287" fill="none" stroke="var(--border-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      <text
        x="56"
        y="352"
        fontSize="10"
        letterSpacing="2.5"
        fill="var(--primary-text-color)"
        opacity="0.55"
        fontFamily="var(--font-mono), monospace"
      >
        WHAT HOLDS IT
      </text>
    </svg>
  );
}
