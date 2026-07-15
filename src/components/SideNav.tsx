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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    navItems
      .filter((item) => !item.href)
      .forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

    return () => observer.disconnect();
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
            className="flex items-center gap-4 group text-left"
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
