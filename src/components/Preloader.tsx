"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";

const subscribe = () => () => {};

export default function Preloader() {
  const [done, setDone] = useState(false);
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!mounted) return;

    const calm =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "off";
    // Skip entirely if seen this session or motion is off
    if (calm || sessionStorage.getItem("gw-preloaded")) {
      const frame = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(frame);
    }
    sessionStorage.setItem("gw-preloaded", "1");

    const obj = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.to(obj, {
      v: 100,
      duration: 1.3,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current)
          countRef.current.textContent = String(Math.round(obj.v)).padStart(3, "0");
      },
    }).to(rootRef.current, {
      yPercent: -100,
      duration: 0.75,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [mounted]);

  if (done || !mounted) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "var(--bg-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "var(--primary-text-color)",
          lineHeight: 1,
        }}
      >
        GateWay<span style={{ color: "var(--accent-light)" }}>.</span>
      </span>
      <span
        ref={countRef}
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "0.3em",
          color: "var(--fg-color)",
          fontFamily: "var(--font-mono), monospace",
        }}
      >
        000
      </span>
    </div>
  );
}
