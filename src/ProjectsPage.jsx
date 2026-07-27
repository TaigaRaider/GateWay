export const SectionProjects = () => {
  const projects = [
    {
      title: "CAMPUS-CUP",
      desc: "An Intra-Mural Sports League Manager built to help increase student participation and trust in On-Campus Sports leagues.",
      tags: ["Python, Textual"],
      suffix: "campus-cup",
      img: "src/assets/CampusCUp.jpg",
    },
    {
      title: "The Tabloid",
      desc: "A properly persistent notes taking app, complete with all CRUD functionality.",
      tags: ["Node.js", "React", "Express"],
      suffix: "Busybody",
      img: "https://duggo.app/300x200",
    },
    {
      title: "Calc",
      desc: "A Calculator app built to help students understand the importance of seemingly simple prebuilt JavaScript Modules.",
      tags: ["HTML", "CSS", "JavaScript"],
      suffix: "CACA",
      img: "https://duggo.app/300x200",
    },
    {
      title: "RainBoard",
      desc: "A weather Dashboard to make sure you're not walking the Plank.",
      tags: ["React", "CSS"],
      suffix: "RainBoard",
      prod_link: "https://rain-board-mauve.vercel.app/",
      img: "https://duggo.app/300x200",
    },
  ];

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
        {projects.map((project, i) => (
          <div
            className="portfolio-card"
            key={i}
            style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
          >
            <img
              className="portfolio-card-media"
              src={project.img}
              alt=""
            />
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
        <button className="btn btn-outline">View all</button>
      </div>
    </section>
  );
};
