"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Stat = { value: number; suffix: string; label: string };

export default function Stats({ stats }: { stats: Stat[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>("[data-count]");
    const calm =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "off";

    if (calm) {
      els.forEach((el) => {
        el.textContent = el.dataset.count + (el.dataset.suffix ?? "");
      });
      return;
    }

    const tweens = Array.from(els).map((el) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      const obj = { v: 0 };
      return gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 80%", once: true },
        onUpdate: () => {
          el.textContent =
            (target % 1 !== 0 ? obj.v.toFixed(1) : String(Math.round(obj.v))) + suffix;
        },
      });
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-2 stats-grid lg:grid-cols-4"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="stat-cell flex flex-col gap-1"
        >
          <span
            data-count={s.value}
            data-suffix={s.suffix}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--primary-text-color)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            0{s.suffix}
          </span>
          <span
            style={{
              fontSize: "var(--text-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--fg-color)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
