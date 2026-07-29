export const SectionExpertise = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const cards = [
    {
      title: "Robust Architectures",
      desc: "Express and Node.js backends designed to scale under pressure without breaking a sweat. Distributed systems that stay resilient.",
      svg: (
        <svg
          className="expertise-card-img"
          viewBox="0 0 160 110"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="160" height="110" fill="var(--placeholder-bg)" />
          <text
            x="80"
            y="58"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--primary-text-color)"
            fontSize="24"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="1"
            className="animate-glow"
          >
            Node.js
          </text>
          <path
            d="M50 75 h60"
            stroke="var(--primary-text-color)"
            strokeWidth="2"
            strokeDasharray="120"
            strokeDashoffset="0"
            className="animate-dash"
          />
        </svg>
      ),
    },
    {
      title: "Precise Interfaces",
      desc: "Every pixel matters. React frontends that feel fast, honest, and intentional — quality you can sense.",
      svg: (
        <svg
          className="expertise-card-img"
          viewBox="0 0 160 110"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="160" height="110" fill="var(--placeholder-bg)" />
          <g className="animate-rotate-slow">
            <ellipse
              cx="80"
              cy="55"
              rx="40"
              ry="14"
              fill="none"
              stroke="var(--primary-text-color)"
              strokeWidth="2"
            />
          </g>
          <g className="animate-rotate-medium">
            <ellipse
              cx="80"
              cy="55"
              rx="40"
              ry="14"
              fill="none"
              stroke="var(--primary-text-color)"
              strokeWidth="2"
              transform="rotate(60 80 55)"
            />
          </g>
          <g className="animate-rotate-fast">
            <ellipse
              cx="80"
              cy="55"
              rx="40"
              ry="14"
              fill="none"
              stroke="var(--primary-text-color)"
              strokeWidth="2"
              transform="rotate(-60 80 55)"
            />
          </g>
          <circle
            cx="80"
            cy="55"
            r="7"
            fill="var(--primary-text-color)"
            opacity="0.3"
            className="animate-pulse"
          />
          <circle
            cx="80"
            cy="55"
            r="3"
            fill="var(--primary-text-color)"
            opacity="0.5"
          />
        </svg>
      ),
    },
    {
      title: "Clean Automation",
      desc: "Repetition is a machine's job. Python scripts that handle the mundane with surgical elegance.",
      svg: (
        <svg
          className="expertise-card-img"
          viewBox="0 0 160 110"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="160" height="110" fill="var(--placeholder-bg)" />
          <g className="animate-rotate-hex">
            <path
              d="M65 20h30l20 35-20 35H65L45 55l20-35z"
              fill="none"
              stroke="var(--primary-text-color)"
              strokeWidth="2"
            />
          </g>
          <path
            d="M55 35h30l15 25-15 25H55L40 60l15-25z"
            fill="none"
            stroke="var(--primary-text-color)"
            strokeWidth="2"
            strokeDasharray="120"
            strokeDashoffset="0"
            className="animate-dash"
          />
          <text
            x="75"
            y="72"
            textAnchor="middle"
            fill="var(--primary-text-color)"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="animate-float"
          >
            Py
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="section" id="expertise">
      <div className="expertise-header">
        <div className="expertise-header-left">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">
            Disciplines
            <br />I own
          </h2>
        </div>
        <div className="expertise-header-right">
          <p>
            Every discipline informs the next. Architecture without a clean
            interface is just plumbing. Interfaces without backbone are just
            decoration.
          </p>
          <div className="expertise-actions">
            <button
              className="btn btn-outline"
              onClick={() => scrollTo("projects")}
            >
              View
            </button>
            <button
              className="btn btn-text"
              onClick={() => scrollTo("contact")}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="expertise-grid">
        {cards.map((card, i) => (
          <div className="expertise-card" key={i}>
            {card.svg}
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
