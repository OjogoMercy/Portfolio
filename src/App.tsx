import "./App.css";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { experience, Projects } from "./components/Database";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
function App() {
  return (
    <div className="flex  flex-col md:flex-row min-h-screen bg-page-bg">
      <aside className="w-full md:w-2/5 md:h-screen md:sticky md:top-0 p-5 sm:p-10 mx-auto">
        <h1 className="text-4xl sm:text-3xl md:text-4xl text-text-primary font-bold mt-5 mb-5">
          Ojogo Mercy
        </h1>
        <h2 className="text-text-secondary text-2xl sm:text-base mt-3 mb-3">
          Mobile and Frontend Engineer
        </h2>
        <h2 className="text-text-secondary text-sm sm:text-base">
          Building products that start with better questions, not just better
          code.
        </h2>

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
      <main className="w-full md:w-2/4 p-6 sm:p-10 mx-auto text-text-secondary text-sm sm:text-base  leading-relaxed ">
        <section id="summary" className="mt-10 sm:mb-24">
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

        <section id="experience" className="mt-15 sm:mt-20 ">
          <h2 className="text-text-primary font-bold text-2xl">Experience</h2>
          {experience.map((item) => (
            <ExperienceCard item={item} key={item.id} />
          ))}
        </section>

        <section id="projects" className="mt-15 sm:mt-20">
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
