export default function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const strip = items.join("   ·   ") + "   ·   ";
  return (
    <div className="marquee" aria-hidden>
      <div className={`marquee-track${reverse ? " marquee-reverse" : ""}`}>
        <span className="marquee-text">{strip}</span>
        <span className="marquee-text">{strip}</span>
      </div>
    </div>
  );
}
