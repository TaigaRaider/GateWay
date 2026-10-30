"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Me" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="NavBar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 0",
        background: "var(--bg-color)",
        borderBottom: `1px solid ${scrolled ? "var(--border-color)" : "transparent"}`,
        transition: "border-color 0.3s ease",
      }}
    >
      <a
        href="#home"
        className="nameTag"
        style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "var(--primary-text-color)",
          letterSpacing: "-0.02em",
        }}
      >
        GateWay<span style={{ color: "var(--accent-light)" }}>.</span>
      </a>
      <ul className="navlinks" style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              data-magnetic
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "var(--primary-text-color)",
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
