import "./App.css";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { experience, Projects } from "./components/Database";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import SideNav from "./components/SideNav";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    let x = 0;
    let y = 0;

    let targetX = 0;
    let targetY = 0;

    let raf: number;
    let last = performance.now();

    const FOLLOW_SPEED = 2; 

    const animate = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      // Frame-rate independent smoothing
      const alpha = 1 - Math.exp(-FOLLOW_SPEED * dt);

      x += (targetX - x) * alpha;
      y += (targetY - y) * alpha;

      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);

      raf = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-page-bg">
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
      <aside className="w-full md:w-2/5 mt-3 md:h-screen md:sticky md:top-5 p-5 sm:p-10 mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-5xl text-text-primary font-bold mt-3 mb-5 tracking-tight">
          Ojogo Mercy
        </h1>
        <h2 className="text-text-primary text-xl sm:text-lg md:text-lg mt-3 mb-3 ">
          Mobile and Frontend Engineer
        </h2>
        <h2 className="text-text-muted text-sm sm:text-base">
          I design and build maintainable mobile products that solve user and
          product problems. Building products that start with better questions,
          not just better code.
        </h2>
        <div className="mt-20 mb-15">
          <SideNav />
        </div>

        <div className="flex gap-5 mt-8">
          <a
            href="https://github.com/OjogoMercy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a
            href="www.linkedin.com/in/mercyojogo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a
            href="https://x.com/NotJust_Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a href="www.linkedin.com/in/mercyojogo">
            <Mail className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
          <a href="tel:+2347042295235">
            <Phone className="w-5 h-5 text-text-secondary hover:text-accent transition-colors" />
          </a>
        </div>
      </aside>
      <main className="w-full md:w-2/4 py-0 pl-5 pr-5 md:p-10 mx-auto text-text-secondary text-sm sm:text-base leading-relaxed">
        <section id="about" className="mt-10 sm:mb-24">
          <h3 className=" text-text-secondary mb-4">
            Good software isn't just built with code. It's built through
            hundreds of thoughtful decisions about users, trade-offs, and
            long-term maintainability.
          </h3>
          <h3 className="text-text-secondary mb-4">
            As a{" "}
            <strong className="font-bold text-text-primary">
              mobile engineer
            </strong>{" "}
            currently building{" "}
            <strong className="font-bold text-text-primary">HealthCard</strong>,
            a maternal and child healthcare app, that belief shapes how I
            approach every decision, from designing user experiences to making
            architectural choices. My goal is always the same: understand the
            problem deeply enough that the solution feels obvious rather than
            clever.
          </h3>
          <h3 className="text-text-secondary mb-4">
            I believe better software starts with better questions. The
            questions behind a product interest me more than the features
            themselves because I believe the hardest part of building software
            usually isn't writing the code, it's understanding the problem well
            enough to know what should be built in the first place.
          </h3>

          <h3 className="text-text-secondary">
            If you're building products that value thoughtful engineering and
            product thinking, I'd love to connect.
          </h3>
        </section>

        <section id="experience" className="mt-15 sm:mt-20 overflow-x-hidden ">
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

        <footer className=" text-center space-y-2 mt-15 mr-auto self-start">
          <p className="text-sm text-text-primary">
            Designed & Built by Ojogo Mercy
          </p>
          <p className="text-sm text-text-secondary">
            © 2026 Mercy. All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
