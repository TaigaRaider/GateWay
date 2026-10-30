"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Panel = {
  title: string;
  body: string;
  tags: string[];
  img: string;
  repo: string;
  prod?: string;
};

export default function HorizontalGallery({ panels }: { panels: Panel[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const distance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { x: 0 });
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative lg:h-screen lg:overflow-hidden">
      <div
        ref={trackRef}
        className="flex flex-col lg:h-full lg:w-max lg:flex-row lg:items-stretch"
      >
        {panels.map((p, i) => (
          <article
            key={p.title}
            className="flex min-h-[60vh] shrink-0 flex-col justify-center px-6 py-12 lg:h-full lg:min-h-0 lg:w-[80vw] lg:px-24"
          >
            <div className="flex h-full items-center">
              <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1023px) 90vw, 40vw"
                  loading="lazy"
                  className="w-full border project-media"
                  style={{
                    aspectRatio: "16 / 10",
                    objectFit: "contain",
                    background: "var(--placeholder-bg)",
                    borderColor: "var(--border-color)",
                  }}
                />
                <div className="flex flex-col gap-4">
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      letterSpacing: "0.3em",
                      opacity: 0.5,
                      color: "var(--primary-text-color)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontSize: "var(--text-2xl)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "var(--primary-text-color)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--fg-color)",
                      lineHeight: 1.6,
                      maxWidth: "28rem",
                    }}
                  >
                    {p.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-3">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-text"
                      data-magnetic
                    >
                      View project
                    </a>
                    {p.prod && (
                      <a
                        href={p.prod}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-text"
                        data-magnetic
                      >
                        Open
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
