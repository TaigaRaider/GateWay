"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  wipe = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  wipe?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const calm =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "off";

    if (calm) {
      gsap.set(el, { opacity: 1, y: 0, clipPath: "none" });
      return;
    }

    const from = wipe
      ? { opacity: 0, clipPath: "inset(0 0 100% 0)" }
      : { opacity: 0, y };
    const to = wipe
      ? {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power4.out" as const,
        }
      : { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" as const };

    const tween = gsap.fromTo(el, from, {
      ...to,
      delay,
      scrollTrigger: { trigger: el, start: "top 85%" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, wipe]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
