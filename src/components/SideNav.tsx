import { useEffect, useState } from "react";

const navItems = [
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECTS", id: "projects" },
  {
    label: "RESUME",
    id: "resume",
    href: "https://drive.google.com/file/d/1qBH7Mi7MJWxKIc2gYP5_fSnm07VSaYMz/view?usp=drive_link",
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
  const scrollTo = (id: string, href?: string) => {
    if (href) {
      window.open(href, "_blank");
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="flex flex-col gap-4">
      {navItems.map(({ label, id, href }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id, href)}
            className="flex items-center gap-4 group text-left mt-5"
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-15 bg-white"
                  : "w-6 bg-text-muted group-hover:w-10 group-hover:bg-text-primary"
              }`}
            />
            <span
              className={`text-xs tracking-widest transition-colors duration-300 ${
                isActive
                  ? "text-white font-bold"
                  : "text-text-muted group-hover:text-text-primary"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
