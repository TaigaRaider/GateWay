export const SectionExpertise = () => {
  const cards = [
    {
      title: "Robust Architecture",
      desc: "Express and Node.Js Backends designed to scale under pressure without breaking a sweat. Distributed systems that stay resilient.",
      img: "src/assets/node_js.png",
    },
    {
      title: "Precise Interfaces",
      desc: "Every pixel matters. React Frontends that feel fast, honest, and intentional — quality you can sense.",
      img: "https://duggo.app/300x200",
    },
    {
      title: "Clean Automation",
      desc: "Repetition is a machine's job. Python scripts that handle the mundane with surgical elegance.",
      img: "src/assets/python.png",
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
            <button className="btn btn-outline">View</button>
            <button className="btn btn-text">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="expertise-grid">
        {cards.map((card, i) => (
          <div className="expertise-card" key={i}>
            <img className="expertise-card-img" src={card.img} alt="" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
