import { useState } from "react";

export const SectionProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "CAMPUS-CUP",
      desc: "An Intra-Mural Sports League Manager built to help increase student participation and trust in On-Campus Sports leagues.",
      tags: ["Python, Textual"],
      suffix: "campus-cup",
      svg: (
        <svg className="portfolio-card-media" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="100" fill="var(--placeholder-bg)" />
          <path d="M40 70 L80 20 L120 70 Z" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <rect x="45" y="70" width="70" height="8" rx="2" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <line x1="55" y1="20" x2="55" y2="10" stroke="var(--border-color)" strokeWidth="2"/>
          <line x1="105" y1="20" x2="105" y2="10" stroke="var(--border-color)" strokeWidth="2"/>
          <circle cx="80" cy="45" r="8" fill="var(--primary-text-color)" opacity="0.15"/>
        </svg>
      ),
    },
    {
      title: "The Tabloid",
      desc: "A properly persistent notes taking app, complete with all CRUD functionality.",
      tags: ["Node.js", "React", "Express"],
      suffix: "Busybody",
      svg: (
        <svg className="portfolio-card-media" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="100" fill="var(--placeholder-bg)" />
          <rect x="35" y="20" width="90" height="65" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <line x1="50" y1="40" x2="100" y2="40" stroke="var(--border-color)" strokeWidth="1.5"/>
          <line x1="50" y1="55" x2="85" y2="55" stroke="var(--border-color)" strokeWidth="1.5"/>
          <line x1="50" y1="70" x2="70" y2="70" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="110" cy="70" r="6" fill="var(--primary-text-color)" opacity="0.15"/>
          <path d="M110 68l-2 4 4-2z" fill="var(--primary-text-color)" opacity="0.3"/>
        </svg>
      ),
    },
    {
      title: "Calc",
      desc: "A Calculator app built to help students understand the importance of seemingly simple prebuilt JavaScript Modules.",
      tags: ["HTML", "CSS", "JavaScript"],
      suffix: "CACA",
      svg: (
        <svg className="portfolio-card-media" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="100" fill="var(--placeholder-bg)" />
          <rect x="45" y="15" width="70" height="75" rx="8" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <rect x="55" y="25" width="50" height="12" rx="2" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <text x="80" y="34" textAnchor="middle" fill="var(--primary-text-color)" fontSize="8" fontFamily="monospace">42</text>
          <circle cx="65" cy="52" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="80" cy="52" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="95" cy="52" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="65" cy="67" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="80" cy="67" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="95" cy="67" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="65" cy="82" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="80" cy="82" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
          <circle cx="95" cy="82" r="5" fill="none" stroke="var(--border-color)" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: "RainBoard",
      desc: "A weather Dashboard to make sure you're not walking the Plank.",
      tags: ["React", "CSS"],
      suffix: "RainBoard",
      prod_link: "https://rain-board-mauve.vercel.app/",
      svg: (
        <svg className="portfolio-card-media" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet">
          <rect width="160" height="100" fill="var(--placeholder-bg)" />
          <circle cx="80" cy="40" r="22" fill="none" stroke="var(--border-color)" strokeWidth="2"/>
          <circle cx="80" cy="40" r="15" fill="none" stroke="var(--border-color)" strokeWidth="1.5" strokeDasharray="3 3"/>
          <path d="M80 18V10 M80 62V70 M58 40H50 M102 40h8 M64 24l-6-6 M96 56l6 6 M64 56l-6 6 M96 24l6-6" stroke="var(--border-color)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="55" y1="80" x2="50" y2="90" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
          <line x1="75" y1="80" x2="70" y2="90" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
          <line x1="95" y1="80" x2="90" y2="90" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
          <line x1="105" y1="80" x2="100" y2="90" stroke="var(--primary-text-color)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        </svg>
      ),
    },
  ];

  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="section" id="projects">
      <div className="portfolio-header">
        <span className="eyebrow">Portfolio</span>
        <h2 className="section-title">Work that holds weight</h2>
        <p className="section-subtitle">
          Each project is a statement — technical depth paired with intentional
          design.
        </p>
      </div>
      <div className="portfolio-grid">
        {displayed.map((project, i) => (
          <div
            className="portfolio-card"
            key={i}
            style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
          >
            {project.svg}
            <div className="portfolio-card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag) => (
                  <span className="pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                target="_blank"
                href={`https://github.com/TaigaRaider/${project.suffix}`}
              >
                <button
                  className="btn btn-text"
                  style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                >
                  View project
                </button>
              </a>
              {project.prod_link && (
                <a target="_blank" href={project.prod_link}>
                  <button
                    className="btn btn-text"
                    style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                  >
                    Open
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-footer">
        <button className="btn btn-outline" onClick={() => setShowAll((s) => !s)}>
          {showAll ? "Show less" : "View all"}
        </button>
      </div>
    </section>
  );
};