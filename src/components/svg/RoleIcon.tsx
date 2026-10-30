type RoleVariant =
  | "engineer"
  | "frontend"
  | "backend"
  | "devops"
  | "python"
  | "architect";

const stroke = "var(--border-color)";
const ink = "var(--primary-text-color)";

/* Software Engineer: gear + code bracket */
function EngineerIcon() {
  return (
    <>
      <path d="M15 12 L9 20 L15 28" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 12 L31 20 L25 28" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="4.5" fill="none" stroke={ink} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.5" fill={ink} />
      <line x1="20" y1="11" x2="20" y2="13.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="26.5" x2="20" y2="29" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="20" x2="13.5" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26.5" y1="20" x2="29" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

/* Frontend: browser frame with cursor */
function FrontendIcon() {
  return (
    <>
      <rect x="8" y="10" width="24" height="20" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.5" />
      <line x1="8" y1="15" x2="32" y2="15" stroke={stroke} strokeWidth="1.5" />
      <circle cx="11" cy="12.5" r="1" fill={ink} />
      <circle cx="14.5" cy="12.5" r="1" fill={ink} />
      <rect x="11" y="18" width="9" height="5" rx="0.5" fill={ink} opacity="0.35" />
      <line x1="23" y1="19" x2="29" y2="19" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <line x1="23" y1="22" x2="27" y2="22" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <path d="M22 24 L22 33 L24.6 30.6 L26.4 34.5 L28.3 33.6 L26.5 29.9 L30 29.6 Z" fill={ink} stroke="var(--bg-color)" strokeWidth="0.8" />
    </>
  );
}

/* Backend: stacked servers with a plug */
function BackendIcon() {
  return (
    <>
      <rect x="10" y="10" width="20" height="6" rx="1" fill="none" stroke={stroke} strokeWidth="1.5" />
      <rect x="10" y="17" width="20" height="6" rx="1" fill="none" stroke={stroke} strokeWidth="1.5" />
      <rect x="10" y="24" width="20" height="6" rx="1" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="13.5" cy="13" r="1.2" fill={ink} />
      <circle cx="13.5" cy="20" r="1.2" fill={ink} className="svg-blink-dot" />
      <circle cx="13.5" cy="27" r="1.2" fill={ink} />
      <line x1="17" y1="13" x2="27" y2="13" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="17" y1="20" x2="27" y2="20" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="17" y1="27" x2="27" y2="27" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <path d="M20 30 V33 M17 33 V36 M23 33 V36" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

/* DevOps: continuous infinity loop with arrowheads */
function DevopsIcon() {
  return (
    <>
      <path
        d="M12 20 C12 14.5 18.5 14.5 20 20 C21.5 25.5 28 25.5 28 20 C28 14.5 21.5 14.5 20 20 C18.5 25.5 12 25.5 12 20 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path d="M14.2 16.6 L12 14.4 L14.8 14.2" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.8 23.4 L28 25.6 L25.2 25.8" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="1.4" fill={ink} />
    </>
  );
}

/* Python: snake abstracted into two interlocking S-curves */
function PythonIcon() {
  return (
    <>
      <path
        d="M25 11 H18 C13.5 11 13.5 17 18 17 H22 C26.5 17 26.5 23 22 23 H15"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 29 H22 C26.5 29 26.5 23 22 23"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24.5" cy="13.5" r="1.2" fill={ink} />
      <circle cx="15.5" cy="26.5" r="1.2" fill={ink} />
      <path d="M26 29 H28" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

/* Architect: blueprint grid with structural frame */
function ArchitectIcon() {
  return (
    <>
      <rect x="9" y="9" width="22" height="22" fill="none" stroke={stroke} strokeWidth="1.5" />
      <line x1="9" y1="16.3" x2="31" y2="16.3" stroke={stroke} strokeWidth="0.75" strokeDasharray="2 2.5" opacity="0.7" />
      <line x1="9" y1="23.6" x2="31" y2="23.6" stroke={stroke} strokeWidth="0.75" strokeDasharray="2 2.5" opacity="0.7" />
      <line x1="16.3" y1="9" x2="16.3" y2="31" stroke={stroke} strokeWidth="0.75" strokeDasharray="2 2.5" opacity="0.7" />
      <line x1="23.6" y1="9" x2="23.6" y2="31" stroke={stroke} strokeWidth="0.75" strokeDasharray="2 2.5" opacity="0.7" />
      <path d="M12 31 V21 L20 13 L28 21 V31" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="24" width="4" height="7" fill="none" stroke={ink} strokeWidth="1.2" />
    </>
  );
}

const ICONS: Record<RoleVariant, () => React.JSX.Element> = {
  engineer: EngineerIcon,
  frontend: FrontendIcon,
  backend: BackendIcon,
  devops: DevopsIcon,
  python: PythonIcon,
  architect: ArchitectIcon,
};

export default function RoleIcon({ variant }: { variant: RoleVariant }) {
  const Icon = ICONS[variant];
  return (
    <svg
      viewBox="0 0 40 40"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "2.5rem",
        height: "2.5rem",
        border: "1px solid var(--border-color)",
        background: "var(--placeholder-bg)",
        display: "block",
        padding: "0.25rem",
        flexShrink: 0,
      }}
      aria-hidden
      focusable="false"
    >
      <rect width="40" height="40" fill="var(--placeholder-bg)" />
      <Icon />
    </svg>
  );
}
