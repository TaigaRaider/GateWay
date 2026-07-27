import { NavBar } from "./NavBar";

export const SectionLanding = () => {
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
            <button className="btn btn-primary">Hire Me</button>
            <button className="btn btn-text">View Work</button>
          </div>
        </div>
        <img
          src="src/assets/hero_illustration.jpg"
          alt="Hero illustration"
          className="hero-image"
        />
      </div>
    </section>
  );
};
