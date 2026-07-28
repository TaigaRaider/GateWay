export const SectionExpertise = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const cards = [
    {
      title: "Robust Architecture",
      desc: "Express and Node.Js Backends designed to scale under pressure without breaking a sweat. Distributed systems that stay resilient.",
      svg: (
        <svg className="expertise-card-img" viewBox="0 0 160 110" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="110" fill="var(--placeholder-bg)" />
          <polygon points="80,15 135,55 135,85 80,125 25,85 25,55" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <text x="80" y="80" textAnchor="middle" fill="var(--primary-text-color)" fontSize="28" fontWeight="bold" fontFamily="monospace">JS</text>
        </svg>
      ),
    },
    {
      title: "Precise Interfaces",
      desc: "Every pixel matters. React Frontends that feel fast, honest, and intentional — quality you can sense.",
      svg: (
        <svg className="expertise-card-img" viewBox="0 0 160 110" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="110" fill="var(--placeholder-bg)" />
          <rect x="20" y="20" width="120" height="75" rx="6" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <rect x="20" y="20" width="120" height="12" rx="3" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="32" cy="26" r="3" fill="#ff5f56" opacity="0.6"/>
          <circle cx="42" cy="26" r="3" fill="#ffbd2e" opacity="0.6"/>
          <circle cx="52" cy="26" r="3" fill="#27c93f" opacity="0.6"/>
          <rect x="36" y="48" width="40" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.15"/>
          <rect x="36" y="60" width="60" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.1"/>
          <rect x="36" y="72" width="30" height="6" rx="3" fill="var(--primary-text-color)" opacity="0.15"/>
        </svg>
      ),
    },
    {
      title: "Clean Automation",
      desc: "Repetition is a machine's job. Python scripts that handle the mundane with surgical elegance.",
      svg: (
        <svg className="expertise-card-img" viewBox="0 0 160 110" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="110" fill="var(--placeholder-bg)" />
          <path d="M65 20h30l20 35-20 35H65L45 55l20-35z" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <path d="M55 35h30l15 25-15 25H55L40 60l15-25z" fill="none" stroke="var(--border-color)" strokeWidth="1.5" strokeDasharray="3 3"/>
          <text x="75" y="72" textAnchor="middle" fill="var(--primary-text-color)" fontSize="14" fontWeight="bold" fontFamily="monospace">Py</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="section" id="expertise">
      <div className="expertise-header">
        <div className="expertise-header-left">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">Disciplines<br />I own</h2>
        </div>
        <div className="expertise-header-right">
          <p>
            Every discipline informs the next. Architecture without a clean
            interface is just plumbing. Interfaces without backbone are just
            decoration.
          </p>
          <div className="expertise-actions">
            <button className="btn btn-outline" onClick={() => scrollTo("projects")}>View</button>
            <button className="btn btn-text" onClick={() => scrollTo("contact")}>Hire Me</button>
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