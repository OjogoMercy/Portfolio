import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { experience, Projects } from "./components/Database";
import ExperienceCard from "./components/ExperienceCard";
import FeaturedProject from "./components/FeaturedProject";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProofBand from "./components/ProofBand";
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
        <ProofBand />

        <section
          id="projects"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 pt-20 pb-24 sm:px-10"
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
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 pb-24 sm:px-10"
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
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 pb-24 sm:px-10"
        >
          <SectionHeading>About</SectionHeading>
          <div className="mt-10 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <p className="text-2xl leading-snug font-extrabold tracking-tight text-balance sm:text-3xl">
              Good software isn't just built with code. It's built through
              hundreds of thoughtful decisions about users, trade-offs, and
              long-term maintainability.
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
              <p>
                If you're building products that value thoughtful engineering
                and product thinking, I'd love to connect.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto flex w-full max-w-6xl scroll-mt-20 flex-wrap items-center gap-x-12 gap-y-8 px-5 pb-24 sm:px-10"
        >
          <div className="min-w-[260px] -rotate-2 bg-marker px-6 py-5 shadow-[4px_5px_0_rgb(20_33_61/0.2)]">
            <h2 className="text-2xl leading-none font-extrabold tracking-tight">
              Contact
            </h2>
            <p className="mt-2 font-bold break-all">mercyojogo@gmail.com</p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:mercyojogo@gmail.com"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-ink px-5 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-sky)]"
            >
              <Mail aria-hidden="true" className="size-4" />
              Send an email
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
