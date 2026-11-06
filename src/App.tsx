import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { experience, Projects } from "./components/Database";
import ExperienceCard from "./components/ExperienceCard";
import FeaturedProject from "./components/FeaturedProject";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProofRibbon from "./components/ProofRibbon";
import SectionHeading from "./components/SectionHeading";
import Skills from "./components/Skills";

const socialClass =
  "grid size-11 place-items-center rounded-full border border-ink bg-white transition-colors hover:bg-marker";

const featured = Projects.filter((item) => item.screens);
const more = Projects.filter((item) => !item.screens);

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <ProofRibbon />

        <section
          id="projects"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 pt-20 pb-24 sm:px-10"
        >
          <SectionHeading>Work</SectionHeading>
          <p className="mt-4 mb-10 max-w-xl text-lg text-ink-soft">
            A selection of products I have built and shipped.
          </p>

          {featured.map((item, index) => (
            <FeaturedProject key={item.id} item={item} flip={index % 2 === 1} />
          ))}

          <h3 className="mt-6 mb-12 border-t border-ink/20 pt-14 text-3xl font-extrabold tracking-tight">
            More projects
          </h3>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {more.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <Skills />

        <section
          id="experience"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 pb-24 sm:px-10"
        >
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-10 space-y-10">
            {experience.map((item) => (
              <ExperienceCard item={item} key={item.id} />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 pb-24 sm:px-10"
        >
          <SectionHeading>About</SectionHeading>
          <div className="reveal mt-10 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <p className="text-2xl leading-snug font-extrabold tracking-tight text-balance sm:text-3xl">
              Good software isn't just built with code. It's built through{" "}
              <span className="underline decoration-pen decoration-wavy decoration-2 underline-offset-[7px]">
                hundreds of thoughtful decisions
              </span>{" "}
              about users, trade-offs, and long-term maintainability.
            </p>
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                As a{" "}
                <strong className="font-extrabold text-ink">
                  mobile engineer
                </strong>{" "}
                currently building{" "}
                <strong className="font-extrabold text-ink">Ojiva</strong>, a
                maternal and child healthcare app, that belief shapes how I
                approach every decision, from designing user experiences to
                making architectural choices. My goal is always the same:
                understand the problem deeply enough that the solution feels
                obvious rather than clever.
              </p>
              <p>
                I believe better software starts with better questions. The
                questions behind a product interest me more than the features
                themselves because I believe the hardest part of building
                software usually isn't writing the code, it's understanding the
                problem well enough to know what should be built in the first
                place.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 pb-28 sm:px-10"
        >
          <div className="reveal grid items-end gap-10 border-t-4 border-ink pt-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <h2 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              If you're building products that value{" "}
              <span className="hl">thoughtful engineering</span> and product
              thinking, I'd love to connect.
            </h2>
            <div className="flex flex-col items-start gap-5">
              <p className="inline-flex items-center gap-2 text-sm font-bold">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#1f8a4c]"
                />
                Open to remote roles
              </p>
              <a
                href="mailto:mercyojogo@gmail.com"
                className="inline-flex items-center gap-3 rounded-md bg-ink px-6 py-4 text-lg font-bold break-all text-white shadow-[5px_5px_0_var(--color-sky)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-sky)]"
              >
                <Mail aria-hidden="true" className="size-5 shrink-0" />
                mercyojogo@gmail.com
              </a>
              <div className="flex gap-3">
              <a
                href="https://github.com/OjogoMercy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mercy Ojogo on GitHub"
                className={socialClass}
              >
                <FaGithub aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mercyojogo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mercy Ojogo on LinkedIn"
                className={socialClass}
              >
                <FaLinkedin aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://x.com/NotJust_Code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mercy Ojogo on X"
                className={socialClass}
              >
                <FaTwitter aria-hidden="true" className="size-5" />
              </a>
              <a
                href="tel:+2347042295235"
                aria-label="Call Mercy Ojogo"
                className={socialClass}
              >
                <Phone aria-hidden="true" className="size-5" />
              </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-grid bg-paper/90 px-5 py-8 text-center sm:px-10">
        <p className="text-sm font-bold">Designed &amp; Built by Mercy Ojogo</p>
        <p className="mt-1 text-sm text-ink-muted">
          © {new Date().getFullYear()} Mercy Ojogo. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
