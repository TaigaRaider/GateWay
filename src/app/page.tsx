import LenisProvider from "@/components/providers/LenisProvider";
import MagneticCursor from "@/components/MagneticCursor";
import KineticText from "@/components/KineticText";
import ScrollReveal from "@/components/ScrollReveal";
import HorizontalGallery from "@/components/HorizontalGallery";
import HeroSection from "@/components/HeroSection";
import ThemeToggle from "@/components/ThemeToggle";
import NavBar from "@/components/NavBar";
import YearLabel from "@/components/YearLabel";
import PhilosophyDiagram from "@/components/svg/PhilosophyDiagram";
import ExpertiseVisual from "@/components/svg/ExpertiseVisual";
import RoleIcon from "@/components/svg/RoleIcon";
import Preloader from "@/components/Preloader";
import MotionToggle from "@/components/MotionToggle";
import GrainOverlay from "@/components/GrainOverlay";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import SkillsMatrix from "@/components/SkillsMatrix";
import ContactForm from "@/components/ContactForm";

const PROJECTS = [
  {
    title: "CAMPUS-CUP",
    body: "An intra-mural sports league manager built to increase student participation and trust in on-campus sports leagues.",
    tags: ["Python", "Textual"],
    img: "/images/campus-cup.png",
    repo: "https://github.com/TaigaRaider/campus-cup",
  },
  {
    title: "The Tabloid",
    body: "A properly persistent notes-taking app, complete with all CRUD functionality.",
    tags: ["Node.js", "React", "Express"],
    img: "/images/tabloid.png",
    repo: "https://github.com/TaigaRaider/Busybody",
    prod: "https://thetabloid.vercel.app",
  },
  {
    title: "Calc",
    body: "A calculator app built to help students understand the importance of seemingly simple prebuilt JavaScript modules.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "/images/calculator.png",
    repo: "https://github.com/TaigaRaider/CACA",
    prod: "https://cucurella.vercel.app",
  },
  {
    title: "RainBoard",
    body: "A weather dashboard to make sure you're not walking the plank.",
    tags: ["React", "CSS"],
    img: "/images/rainboard.png",
    repo: "https://github.com/TaigaRaider/RainBoard",
    prod: "https://rain-board-mauve.vercel.app/",
  },
];

const EXPERTISE = [
  {
    title: "Robust Architectures",
    desc: "Express and Node.js backends designed to scale under pressure without breaking a sweat. Distributed systems that stay resilient.",
    variant: "architecture" as const,
  },
  {
    title: "Precise Interfaces",
    desc: "Every pixel matters. React frontends that feel fast, honest, and intentional — quality you can sense.",
    variant: "interface" as const,
  },
  {
    title: "Data Foundations",
    desc: "Schemas that anticipate change. Queries that stay fast as data grows. Storage decisions made once, made right.",
    variant: "data" as const,
  },
];

const ROLES = [
  {
    title: "Software Engineer",
    desc: "Full-cycle development from conception to deployment. Systems thinking in every layer.",
    icon: "engineer" as const,
  },
  {
    title: "Frontend",
    desc: "Responsive, accessible interfaces built with modern React and design-system discipline.",
    icon: "frontend" as const,
  },
  {
    title: "Backend",
    desc: "Scalable APIs, event-driven architecture, and data pipelines that never skip a beat.",
    icon: "backend" as const,
  },
  {
    title: "DevOps",
    desc: "CI/CD, container orchestration, and infrastructure as code — automation as a mindset.",
    icon: "devops" as const,
  },
  {
    title: "Python",
    desc: "Scripting, data processing, and backend services written with clarity and purpose.",
    icon: "python" as const,
  },
  {
    title: "Architect",
    desc: "System design that balances trade-offs between performance, cost, and maintainability.",
    icon: "architect" as const,
  },
];

const STATS = [
  { value: 300, suffix: "", label: "Level — Nile University" },
  { value: 4, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years building" },
  { value: 12, suffix: "+", label: "Technologies in rotation" },
];

const TIMELINE = [
  {
    period: "NOW",
    role: "Freelance Full-Stack Engineer",
    org: "Independent · BSc Software Engineering, Nile University (300 Level)",
    desc: "Building and shipping end-to-end web systems for clients and of my own design — while completing my degree in Software Engineering.",
    tags: ["React", "Node.js", "Express", "Python"],
  },
  {
    period: "2025",
    role: "The Tabloid · RainBoard",
    org: "Shipped products",
    desc: "Designed persistent CRUD systems and live data dashboards, deployed on Vercel with real users.",
    tags: ["React", "Node.js", "Express", "Vercel"],
  },
  {
    period: "2024",
    role: "Campus-Cup",
    org: "Intra-mural sports league manager",
    desc: "Built a terminal-native league system in Python to increase student participation and trust in campus sports.",
    tags: ["Python", "Textual"],
  },
  {
    period: "EARLIER",
    role: "Foundations",
    org: "Self-directed",
    desc: "Mastered the fundamentals — JavaScript modules, HTML/CSS systems thinking, and the discipline of clean code.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const SKILLS = [
  { name: "React / Next.js", level: 90, group: "Frontend" },
  { name: "TypeScript / JavaScript", level: 88, group: "Frontend" },
  { name: "HTML / CSS", level: 95, group: "Frontend" },
  { name: "Responsive & Accessible UI", level: 85, group: "Frontend" },
  { name: "Node.js", level: 87, group: "Backend" },
  { name: "Express", level: 85, group: "Backend" },
  { name: "Python", level: 82, group: "Backend" },
  { name: "REST API design", level: 84, group: "Backend" },
  { name: "SQL & Data Modeling", level: 78, group: "Platform" },
  { name: "Git / GitHub", level: 88, group: "Platform" },
  { name: "CI/CD & Deployment", level: 75, group: "Platform" },
  { name: "System Architecture", level: 80, group: "Platform" },
];

const MARQUEE_TOP = [
  "Systems that hold weight",
  "Full-stack engineering",
  "Clean code ships",
  "Depth at every layer",
];

const MARQUEE_BOTTOM = [
  "React",
  "Node.js",
  "Express",
  "Python",
  "Next.js",
  "PostgreSQL",
  "System design",
];

export default function Home() {
  return (
    <LenisProvider>
      <Preloader />
      <GrainOverlay />
      <MagneticCursor />
      <ThemeToggle />
      <MotionToggle />

      <main className="flex-1">
        <div style={{ padding: "0 var(--section-padding-x)" }}>
          <NavBar />
        </div>

        {/* ─── Hero ─── */}
        <HeroSection />

        {/* ─── Stats ─── */}
        <section style={{ padding: "0 var(--section-padding-x)" }} aria-label="Impact numbers">
          <ScrollReveal wipe>
            <Stats stats={STATS} />
          </ScrollReveal>
        </section>

        <Marquee items={MARQUEE_TOP} />

        {/* ─── Philosophy ─── */}
        <section className="section" id="philosophy">
          <div className="philosophy-grid grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <PhilosophyDiagram
                className="w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:mt-28">
              <span className="eyebrow">Philosophy</span>
              <KineticText>
                <h2 className="section-title">
                  Systems over
                  <br />
                  surfaces
                </h2>
              </KineticText>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "var(--text-sm)",
                  lineHeight: 1.6,
                  color: "var(--fg-color)",
                  maxWidth: "32rem",
                }}
              >
                Interfaces are the surface. What matters is the structure
                underneath — the data models, the boundaries, the failure modes
                you designed for before they happened. I build so the depth
                shows through the surface.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Expertise ─── */}
        <section className="section" id="expertise">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <span className="eyebrow">Expertise</span>
              <KineticText>
                <h2 className="section-title">
                  Depth at
                  <br />
                  every layer
                </h2>
              </KineticText>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex flex-col items-start justify-end lg:items-end lg:text-right">
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-color)",
                  maxWidth: "28rem",
                  marginBottom: "1.25rem",
                  lineHeight: 1.6,
                }}
              >
                Three disciplines, one through-line: systems that hold up under
                real load — of users, of data, of change.
              </p>
              <a href="#projects" className="btn btn-outline" data-magnetic>
                See it in practice
              </a>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <article
                  className="expertise-card flex h-full flex-col gap-4"
                  style={{ border: "1px solid var(--border-color)", padding: "1.5rem" }}
                >
                  <ExpertiseVisual variant={card.variant} />
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
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--primary-text-color)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-color)", lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ─── Process ─── */}
        <section className="section" id="process" style={{ minHeight: "auto" }}>
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ScrollReveal wipe>
              <span className="eyebrow">Process</span>
              <KineticText>
                <h2 className="section-title">
                  How the work
                  <br />
                  gets made
                </h2>
              </KineticText>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex items-end justify-start lg:justify-end">
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-color)",
                  maxWidth: "28rem",
                  lineHeight: 1.6,
                }}
              >
                No mystery, no magic — a repeatable path from problem to
                production that keeps depth and care in every step.
              </p>
            </ScrollReveal>
          </div>
          <Services />
        </section>

        {/* ─── Experience Timeline ─── */}
        <section className="section" id="experience" style={{ minHeight: "auto" }}>
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ScrollReveal wipe>
              <span className="eyebrow">Experience</span>
              <KineticText>
                <h2 className="section-title">
                  The road so
                  <br />
                  far
                </h2>
              </KineticText>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex items-end justify-start lg:justify-end">
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-color)",
                  maxWidth: "28rem",
                  lineHeight: 1.6,
                }}
              >
                From fundamentals to shipped products — each step built on the
                one before it.
              </p>
            </ScrollReveal>
          </div>
          <Timeline entries={TIMELINE} />
        </section>

        <Marquee items={MARQUEE_BOTTOM} reverse />

        {/* ─── Projects (horizontal scroll) ─── */}
        <section id="projects">
          <div className="px-0 pb-0" style={{ padding: "var(--section-padding-y) 0 0" }}>
            <div className="mb-12 text-center" style={{ padding: "0 var(--section-padding-x)" }}>
              <ScrollReveal>
                <span className="eyebrow">Portfolio</span>
                <KineticText>
                  <h2 className="section-title">Work that holds weight</h2>
                </KineticText>
                <p
                  className="section-subtitle"
                  style={{ maxWidth: "36rem", margin: "0.75rem auto 0" }}
                >
                  Each project is a statement — technical depth paired with
                  intentional design.
                </p>
              </ScrollReveal>
            </div>
            <HorizontalGallery panels={PROJECTS} />
          </div>
        </section>

        {/* ─── About / Persona ─── */}
        <section className="section" id="about">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <ScrollReveal>
              <span className="eyebrow">Profile</span>
              <KineticText>
                <h2 className="section-title">
                  One
                  <br />
                  engineer,
                  <br />
                  many roles
                </h2>
              </KineticText>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((role, i) => (
              <ScrollReveal key={role.title} delay={i * 0.05}>
                <div
                  className="persona-card flex h-full flex-col gap-3"
                  style={{ border: "1px solid var(--border-color)", padding: "1.25rem" }}
                >
                  <RoleIcon variant={role.icon} />
                  <h4
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--primary-text-color)",
                    }}
                  >
                    {role.title}
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-color)", lineHeight: 1.5 }}>
                    {role.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ─── Skills Matrix ─── */}
        <section className="section" id="skills" style={{ minHeight: "auto" }}>
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ScrollReveal wipe>
              <span className="eyebrow">Stack</span>
              <KineticText>
                <h2 className="section-title">
                  Tools of
                  <br />
                  the trade
                </h2>
              </KineticText>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex items-end justify-start lg:justify-end">
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-color)",
                  maxWidth: "28rem",
                  lineHeight: 1.6,
                }}
              >
                Ranked by hands-on use, not hype. The stack shifts; the
                fundamentals don&apos;t.
              </p>
            </ScrollReveal>
          </div>
          <SkillsMatrix skills={SKILLS} />
        </section>

        {/* ─── CTA + Contact ─── */}
        <ScrollReveal>
          <div
            className="cta-banner mt-12 flex flex-col items-center gap-6 text-center"
            id="contact"
            style={{ border: "1px solid var(--border-color)", padding: "3rem var(--section-padding-x)" }}
          >
            <KineticText>
              <h2
                style={{
                  fontSize: "var(--text-3xl)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--primary-text-color)",
                  lineHeight: 1.1,
                }}
              >
                Let&apos;s build something
                <br />
                that holds weight
              </h2>
            </KineticText>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--fg-color)",
                maxWidth: "32rem",
              }}
            >
              Whether you need a full platform or a precise component, I work
              best on problems that demand both depth and care.
            </p>
            <ContactForm />
          </div>
        </ScrollReveal>
      </main>

      <footer
        className="flex flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <span style={{ fontSize: "var(--text-xs)", color: "var(--fg-color)" }}>
          <YearLabel /> Adetunji Timothy Ojo
        </span>
        <div className="flex gap-6">
          <a
            href="https://github.com/TaigaRaider"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-text"
            data-magnetic
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adetunjiojo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-text"
            data-magnetic
          >
            LinkedIn
          </a>
          <a href="mailto:adetunji.timothy@gmail.com" className="btn btn-text" data-magnetic>
            Email
          </a>
        </div>
      </footer>
    </LenisProvider>
  );
}
