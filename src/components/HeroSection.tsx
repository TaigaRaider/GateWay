"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 animate-pulse"
      style={{ background: "var(--placeholder-bg)" }}
    />
  ),
});

export default function HeroSection({ children }: { children?: ReactNode }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      id="home"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        padding: "var(--section-padding-y) var(--section-padding-x)",
      }}
    >
      <HeroCanvas />
      <div className="relative z-10 flex flex-1 items-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="hero-content flex flex-col gap-6">
            <span className="eyebrow">
              Adetunji Timothy Ojo — Freelance Full-Stack Engineer
            </span>
            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(2.75rem, 8vw, 6rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 0.98,
                color: "var(--primary-text-color)",
              }}
            >
              I build systems
              <br />
              that hold weight.
            </h1>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--fg-color)",
                maxWidth: "32rem",
                lineHeight: 1.6,
              }}
            >
              From the interface to the database, every layer is crafted with
              precision. Clean code is the only kind that ships.
            </p>
            <div className="hero-actions flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn btn-primary" data-magnetic>
                Hire Me
              </a>
              <a href="#projects" className="btn btn-text" data-magnetic>
                View Work
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
      {children}
      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden
      >
        <span
          style={{
            fontSize: "var(--text-xs)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--fg-color)",
          }}
        >
          Scroll
        </span>
        <span className="scroll-hint-line" />
      </div>
    </section>
  );
}
