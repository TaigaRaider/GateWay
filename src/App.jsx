import { SectionLanding } from "./LandingPage";
import { SectionPhilosophy } from "./PhilosophyPage";
import { SectionExpertise } from "./ExpertisePage";
import { SectionProjects } from "./ProjectsPage";
import { SectionAbout } from "./AboutPage";
import "./App.css";

function App() {
  return (
    <>
      <SectionLanding />
      <SectionPhilosophy />
      <SectionExpertise />
      <SectionProjects />
      <SectionAbout />
    </>
  );
}

export default App;
