export const SectionPhilosophy = () => {
  return (
    <section className="section">
      <div className="philosophy-grid">
        <img
          className="philosophy-img"
          src="src/assets/philosophy-img.png"
          alt=""
        />
        <div className="philosophy-content">
          <div>
            <span className="eyebrow">Philosophy</span>
            <h2 className="section-title">The full stack is a single instrument</h2>
            <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
              A great product is not stitched together. It is forged. I handle the
              logic and the layout so the seams disappear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
