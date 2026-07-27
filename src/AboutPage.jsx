export const SectionAbout = () => {
  const roles = [
    {
      title: "Software Engineer",
      desc: "Full-cycle development from conception to deployment. Systems thinking in every layer.",
    },
    {
      title: "Frontend",
      desc: "Responsive, accessible interfaces built with modern React and design-system discipline.",
    },
    {
      title: "Backend",
      desc: "Scalable APIs, event-driven architecture, and data pipelines that never skip a beat.",
    },
    {
      title: "DevOps",
      desc: "CI/CD, container orchestration, and infrastructure as code — automation as a mindset.",
    },
    {
      title: "Python",
      desc: "Scripting, data processing, and backend services written with clarity and purpose.",
    },
    {
      title: "Architect",
      desc: "System design that balances trade-offs between performance, cost, and maintainability.",
    },
  ];

  return (
    <section className="section" id="about">
      <div className="persona-section">
        <div>
          <span className="eyebrow">Profile</span>
          <h2 className="section-title">
            One<br />engineer<br />many roles
          </h2>
        </div>
        <div className="persona-grid">
          {roles.map((role, i) => (
            <div className="persona-card" key={i}>
              <img className="persona-avatar" src="https://duggo.app/300x200" alt="" />
              <h4>{role.title}</h4>
              <p>{role.desc}</p>
              <div className="persona-socials">
                <a href="#">LinkedIn</a>
                <a href="#">X</a>
                <a href="#">Web</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-banner" id="contact">
        <h2>Let's build something<br />that holds weight</h2>
        <p>
          Whether you need a full platform or a precise component, I work best
          on problems that demand both depth and care.
        </p>
        <button className="btn btn-primary">Start now</button>
      </div>
    </section>
  );
};
