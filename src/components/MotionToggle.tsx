"use client";

import { useEffect, useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("gw-motion-changed", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("gw-motion-changed", onChange);
    window.removeEventListener("storage", onChange);
  };
};

function getSnapshot() {
  const stored = localStorage.getItem("gw-motion");
  const system = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return stored === "off" || (stored === null && system);
}

export default function MotionToggle() {
  const off = useSyncExternalStore(subscribe, getSnapshot, () => false);

  useEffect(() => {
    const root = document.documentElement;
    if (off) root.dataset.motion = "off";
    else delete root.dataset.motion;
  }, [off]);

  const toggle = () => {
    localStorage.setItem("gw-motion", off ? "on" : "off");
    // Notify subscribers (useSyncExternalStore) and smooth-scroll handling
    window.dispatchEvent(new Event("gw-motion-changed"));
  };

  return (
    <button
      className="theme-toggle motion-toggle"
      onClick={toggle}
      aria-pressed={off}
      aria-label={off ? "Enable animations" : "Disable animations"}
      data-magnetic
      style={{ right: "auto", left: "1.5rem" }}
    >
      <svg
        viewBox="0 0 24 24"
        width={16}
        height={16}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {off ? (
          <>
            <polygon points="6 3 20 12 6 21 6 3" />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8" />
          </>
        )}
      </svg>
      <span className="theme-toggle-label">{off ? "Motion off" : "Motion on"}</span>
    </button>
  );
}
