"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const motionOff = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "off";

    let lenis: Lenis | null = null;

    const onScroll = () => ScrollTrigger.update();
    const tick = (time: number) => lenis?.raf(time * 1000);

    const start = () => {
      if (lenis || motionOff()) return;
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenis.on("scroll", onScroll);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      // Expose for components that read velocity (kinetic type, cursor)
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
      ScrollTrigger.refresh();
    };

    const stop = () => {
      if (!lenis) return;
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenis = null;
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
      // Recalculate pinned distances for native scroll
      ScrollTrigger.refresh();
    };

    // Respect reduced motion — fall back to native scroll
    start();

    // User toggled motion mid-session: build or tear down smooth scroll
    const onMotionChange = () => {
      if (motionOff()) stop();
      else start();
    };
    window.addEventListener("gw-motion-changed", onMotionChange);

    return () => {
      window.removeEventListener("gw-motion-changed", onMotionChange);
      stop();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
