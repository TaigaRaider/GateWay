import { NavBar } from "./NavBar";

export const SectionLanding = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section" id="home" style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div className="landing-inner">
        <div className="hero-content">
          <span className="eyebrow">Full-Stack Engineer</span>
          <h1>I build systems<br />that hold weight.</h1>
          <p>
            From the interface to the database, every layer is crafted with
            precision. Clean code is the only kind that ships.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("contact")}>Hire Me</button>
            <button className="btn btn-text" onClick={() => scrollTo("projects")}>View Work</button>
          </div>
        </div>
        <svg className="hero-image" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
          <rect width="400" height="300" fill="var(--placeholder-bg)" />
          <rect x="40" y="40" width="150" height="100" rx="8" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <rect x="210" y="40" width="150" height="100" rx="8" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <rect x="40" y="160" width="150" height="100" rx="8" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <rect x="210" y="160" width="150" height="100" rx="8" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <path d="M115 140v20 M265 140v20 M115 160h150" stroke="var(--border-color)" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
          <circle cx="115" cy="90" r="12" fill="var(--primary-text-color)" opacity="0.15"/>
          <circle cx="115" cy="90" r="6" fill="var(--primary-text-color)" opacity="0.3"/>
          <circle cx="285" cy="90" r="12" fill="var(--primary-text-color)" opacity="0.15"/>
          <circle cx="285" cy="90" r="6" fill="var(--primary-text-color)" opacity="0.3"/>
          <circle cx="115" cy="210" r="12" fill="var(--primary-text-color)" opacity="0.15"/>
          <circle cx="115" cy="210" r="6" fill="var(--primary-text-color)" opacity="0.3"/>
          <circle cx="285" cy="210" r="12" fill="var(--primary-text-color)" opacity="0.15"/>
          <circle cx="285" cy="210" r="6" fill="var(--primary-text-color)" opacity="0.3"/>
        </svg>
      </div>
    </section>
  );
};