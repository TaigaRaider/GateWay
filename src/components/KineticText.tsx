"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function KineticText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = gsap.utils.clamp(-12, 12, self.getVelocity() / 180);
        gsap.to(el, {
          skewY: skew,
          duration: 0.5,
          ease: "power3.out",
          overwrite: true,
          onComplete: () =>
            gsap.to(el, { skewY: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" }),
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
