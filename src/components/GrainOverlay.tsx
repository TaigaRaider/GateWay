export default function GrainOverlay() {
  return (
    <>
      {/* Fixed film-grain overlay for depth */}
      <div className="grain-overlay" aria-hidden />
      {/* SVG turbulence source (rendered offscreen, referenced by CSS) */}
      <svg className="grain-source" aria-hidden focusable="false">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </>
  );
}
