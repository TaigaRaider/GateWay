"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    document.body.style.cursor = "none";

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a,button,[data-magnetic]",
      );
      if (target && dotRef.current) {
        // Magnetic snap: shift the dot toward the element center
        const r = target.getBoundingClientRect();
        x.set(e.clientX + (r.left + r.width / 2 - e.clientX) * 0.35);
        y.set(e.clientY + (r.top + r.height / 2 - e.clientY) * 0.35);
        target.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.2}px, ${(e.clientY - (r.top + r.height / 2)) * 0.2}px)`;
      }
    };

    const onOut = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "a,button,[data-magnetic]",
      );
      if (target) {
        target.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
        target.style.transform = "";
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onOut);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
      document.body.style.cursor = "";
    };
  }, [x, y]);

  return (
    <motion.div
      ref={dotRef}
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
    />
  );
}
