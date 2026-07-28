export const SectionPhilosophy = () => {
  return (
    <section className="section">
      <div className="philosophy-grid">
        <svg
          className="philosophy-img"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="400" height="300" fill="var(--placeholder-bg)" />
          <circle
            cx="200"
            cy="150"
            r="80"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="2"
          />
          <circle
            cx="200"
            cy="150"
            r="50"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <circle
            cx="200"
            cy="150"
            r="20"
            fill="var(--primary-text-color)"
            opacity="0.15"
          />
          <circle
            cx="200"
            cy="150"
            r="10"
            fill="var(--primary-text-color)"
            opacity="0.3"
          />
          <line
            x1="200"
            y1="70"
            x2="200"
            y2="50"
            stroke="var(--border-color)"
            strokeWidth="2"
          />
          <line
            x1="200"
            y1="230"
            x2="200"
            y2="250"
            stroke="var(--border-color)"
            strokeWidth="2"
          />
          <line
            x1="120"
            y1="150"
            x2="100"
            y2="150"
            stroke="var(--border-color)"
            strokeWidth="2"
          />
          <line
            x1="280"
            y1="150"
            x2="300"
            y2="150"
            stroke="var(--border-color)"
            strokeWidth="2"
          />
          <circle
            cx="200"
            cy="50"
            r="6"
            fill="var(--primary-text-color)"
            opacity="0.3"
          />
          <circle
            cx="200"
            cy="250"
            r="6"
            fill="var(--primary-text-color)"
            opacity="0.3"
          />
          <circle
            cx="100"
            cy="150"
            r="6"
            fill="var(--primary-text-color)"
            opacity="0.3"
          />
          <circle
            cx="300"
            cy="150"
            r="6"
            fill="var(--primary-text-color)"
            opacity="0.3"
          />
        </svg>
        <div className="philosophy-content">
          <div>
            <span className="eyebrow">Philosophy</span>
            <h2 className="section-title">
              The full stack is a single instrument
            </h2>
            <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
              A great product is not stitched together. It is forged. I handle
              the logic and the layout so the seams disappear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
