import { useEffect, useState } from "react";
import { RESUME_URL } from "./Database";

const links = [
  { id: "projects", label: "Work" },
  { id: "tools", label: "Tools" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-grid bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-10">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          Mercy Ojogo
        </a>
        <nav aria-label="Sections" className="flex items-center gap-5 sm:gap-7">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative z-0 hidden text-[15px] font-semibold md:inline ${
                active === id
                  ? "text-ink after:absolute after:inset-x-[-3px] after:bottom-0 after:-z-10 after:h-2 after:bg-marker"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-ink bg-white px-3.5 py-1.5 text-[15px] font-bold shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--color-ink)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
