"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Skill = { name: string; level: number; group: string };

export default function SkillsMatrix({ skills }: { skills: Skill[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const bars = root.querySelectorAll<HTMLElement>("[data-level]");
    const calm =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motion === "off";

    if (calm) {
      bars.forEach((b) => (b.style.width = b.dataset.level + "%"));
      return;
    }

    const tweens = Array.from(bars).map((bar, i) =>
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: bar.dataset.level + "%",
          duration: 1.1,
          ease: "power3.out",
          delay: (i % 6) * 0.06,
          scrollTrigger: { trigger: bar, start: "top 92%", once: true },
        },
      ),
    );

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  const groups = [...new Set(skills.map((s) => s.group))];

  return (
    <div ref={rootRef} className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {groups.map((g) => (
        <div key={g} className="flex flex-col gap-4">
          <span
            style={{
              fontSize: "var(--text-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--primary-text-color)",
              opacity: 0.6,
            }}
          >
            {g}
          </span>
          {skills
            .filter((s) => s.group === g)
            .map((s) => (
              <div key={s.name} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between">
                  <span
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 500,
                      color: "var(--primary-text-color)",
                    }}
                  >
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--fg-color)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {s.level}
                  </span>
                </div>
                <div
                  style={{
                    height: "4px",
                    background: "var(--placeholder-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    data-level={s.level}
                    style={{
                      height: "100%",
                      width: "0%",
                      background: "var(--primary-text-color)",
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
