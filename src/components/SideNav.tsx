import { useEffect, useState } from "react";

const navItems = [
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECTS", id: "projects" },
  {
    label: "RESUME",
    id: "resume",
    href: "https://drive.google.com/file/d/1OPn-Ew4F8X6JnpverHunP2daEI2_9bv3/view?usp=drive_link",
  },
];

export default function SideNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = navItems.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav aria-label="Sections" className="flex flex-col gap-4">
      {navItems.map(({ label, id, href }) => {
        const isActive = active === id;
        const className = "flex items-center gap-4 group text-left mt-5";
        const content = (
          <>
            <span
              aria-hidden="true"
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-15 bg-text-primary"
                  : "w-6 bg-text-muted group-hover:w-10 group-hover:bg-text-primary"
              }`}
            />
            <span
              className={`text-xs tracking-widest transition-colors duration-300 ${
                isActive
                  ? "text-text-primary font-bold"
                  : "text-text-muted group-hover:text-text-primary"
              }`}
            >
              {label}
            </span>
          </>
        );

        return href ? (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        ) : (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            aria-current={isActive ? "true" : undefined}
            className={className}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}
