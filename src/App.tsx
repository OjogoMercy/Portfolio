import "./App.css";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { experience, Projects } from "./components/Database";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import SideNav from "./components/SideNav";
import { useEffect, useRef } from "react";

function App() {
  const glowWideRef = useRef<HTMLDivElement>(null);
  const glowCoreRef = useRef<HTMLDivElement>(null);

  // Cursor glow: only runs on devices with a real mouse, respects reduced motion,
  // and stops animating once the glow catches up with the cursor.
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasMouse || reduceMotion) {
      el.style.display = "none";
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;
    let last = performance.now();

    const FOLLOW_SPEED = 6;

    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);

    const animate = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Frame-rate independent smoothing
      const alpha = 1 - Math.exp(-FOLLOW_SPEED * dt);
      x += (targetX - x) * alpha;
      y += (targetY - y) * alpha;

      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);

      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = 0; // settled, stop until the mouse moves again
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-page-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-page-bg focus:text-text-primary focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      {/* Two glow layers. The wrapper uses `contents` so it creates no stacking context
          (mix-blend-mode still blends with the page) and just passes the CSS variables down. */}
      <div ref={glowRef} aria-hidden="true" className="contents">
        <div
          className="pointer-events-none fixed inset-0 z-30"
          style={{
            background:
              "radial-gradient(700px at var(--mouse-x) var(--mouse-y), rgba(29, 78, 216, 0.4), transparent 60%)",
            filter: "blur(30px)",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="pointer-events-none fixed inset-0 z-30"
          style={{
            background:
              "radial-gradient(250px at var(--mouse-x) var(--mouse-y), rgba(96,165,250,.22), transparent 30%)",
            filter: "blur(30px)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <header className="w-full md:w-2/5 mt-3 md:h-screen md:sticky md:top-5 p-5 sm:p-10 mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-5xl text-text-primary font-bold mt-3 mb-5 tracking-tight">
          Mercy Ojogo
        </h1>
        {/* Role line is a paragraph, not a heading, so the heading outline stays clean */}
        <p className="text-text-primary text-xl sm:text-lg md:text-lg mt-3 mb-3">
          Mobile and Full-Stack Engineer
        </p>
        <p className="text-text-muted text-sm sm:text-base">
          I design and build maintainable mobile products that solve user and
          product problems. Building products that start with better questions,
          not just better code.
        </p>
        <p className="text-text-muted text-sm sm:text-base mt-3">
          Working with React Native, TypeScript, Node.js and PostgreSQL.
        </p>

        <div className="mt-20 mb-15">
          <SideNav />
        </div>

        <div className="flex gap-5 mt-8">
          <a
            href="https://github.com/OjogoMercy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mercy Ojogo on GitHub"
          >
            <FaGithub
              aria-hidden="true"
              className="w-5 h-5 text-text-secondary hover:text-accent transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mercyojogo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mercy Ojogo on LinkedIn"
          >
            <FaLinkedin
              aria-hidden="true"
              className="w-5 h-5 text-text-secondary hover:text-accent transition-colors"
            />
          </a>
          <a
            href="https://x.com/NotJust_Code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mercy Ojogo on X"
          >
            <FaTwitter
              aria-hidden="true"
              className="w-5 h-5 text-text-secondary hover:text-accent transition-colors"
            />
          </a>
          <a href="mailto:mercyojogo@gmail.com" aria-label="Email Mercy Ojogo">
            <Mail
              aria-hidden="true"
              className="w-5 h-5 text-text-secondary hover:text-accent transition-colors"
            />
          </a>
          <a href="tel:+2347042295235" aria-label="Call Mercy Ojogo">
            <Phone
              aria-hidden="true"
              className="w-5 h-5 text-text-secondary hover:text-accent transition-colors"
            />
          </a>
        </div>
      </header>

      <main
        id="main"
        className="w-full md:w-2/4 py-0 pl-5 pr-5 md:p-10 mx-auto text-text-secondary text-sm sm:text-base leading-relaxed"
      >
        <section id="about" className="mt-10 sm:mb-24">
          {/* Visually hidden, but gives the section a heading for crawlers and screen readers */}
          <h2 className="sr-only">About</h2>
          <p className="text-text-secondary mb-4">
            Good software isn't just built with code. It's built through
            hundreds of thoughtful decisions about users, trade-offs, and
            long-term maintainability.
          </p>
          <p className="text-text-secondary mb-4">
            As a{" "}
            <strong className="font-bold text-text-primary">
              mobile engineer
            </strong>{" "}
            currently building{" "}
            <strong className="font-bold text-text-primary">Ojiva</strong>, a
            maternal and child healthcare app, that belief shapes how I
            approach every decision, from designing user experiences to making
            architectural choices. My goal is always the same: understand the
            problem deeply enough that the solution feels obvious rather than
            clever.
          </p>
          <p className="text-text-secondary mb-4">
            I believe better software starts with better questions. The
            questions behind a product interest me more than the features
            themselves because I believe the hardest part of building software
            usually isn't writing the code, it's understanding the problem well
            enough to know what should be built in the first place.
          </p>
          <p className="text-text-secondary">
            If you're building products that value thoughtful engineering and
            product thinking, I'd love to connect.
          </p>
        </section>

        <section id="experience" className="mt-15 sm:mt-20 overflow-x-hidden">
          <h2 className="text-text-primary font-bold text-2xl">Experience</h2>
          {experience.map((item) => (
            <ExperienceCard item={item} key={item.id} />
          ))}
        </section>

        <section
          id="projects"
          className="mt-15 sm:mt-20 w-full overflow-x-hidden"
        >
          <h2 className="text-text-primary font-bold text-2xl">Projects</h2>
          {Projects.map((item) => (
            <ProjectCard item={item} key={item.id} />
          ))}
        </section>

        <footer className="text-center space-y-2 mt-15 mr-auto self-start">
          <p className="text-sm text-text-primary">
            Designed & Built by Mercy Ojogo
          </p>
          <p className="text-sm text-text-secondary">
            © 2026 Mercy Ojogo. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;