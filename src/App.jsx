import { useState, useEffect } from "react";
import { SectionLanding } from "./LandingPage";
import { SectionPhilosophy } from "./PhilosophyPage";
import { SectionExpertise } from "./ExpertisePage";
import { SectionProjects } from "./ProjectsPage";
import { SectionAbout } from "./AboutPage";
import "./App.css";

function App() {
  const [nightLight, setNightLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("night-light", nightLight);
  }, [nightLight]);

  return (
    <>
      <button
        className="theme-toggle"
        onClick={() => setNightLight((s) => !s)}
        aria-label="Toggle night light"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="theme-toggle-icon"
        >
          {nightLight ? (
            <g>
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </g>
          ) : (
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          )}
        </svg>
        <span className="theme-toggle-label">{nightLight ? "Day" : "Night"}</span>
      </button>
      <SectionLanding />
      <SectionPhilosophy />
      <SectionExpertise />
      <SectionProjects />
      <SectionAbout />
    </>
  );
}

export default App;