import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-grid bg-paper/90 backdrop-blur">
      <div ref={barRef} className="scroll-progress" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-10">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          Mercy Ojogo
        </a>
        <nav aria-label="Sections" className="flex items-center gap-4 sm:gap-7">
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
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-md border border-ink/30 bg-white md:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-ink bg-white px-3.5 py-1.5 text-[15px] font-bold shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_var(--color-ink)] active:scale-95"
          >
            Resume
          </a>
        </nav>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="border-t border-grid bg-paper px-5 pb-4 md:hidden"
        >
          <ul>
            {links.map(({ id, label }) => (
              <li key={id} className="border-b border-ink/10 last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className="block py-3.5 text-lg font-bold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
