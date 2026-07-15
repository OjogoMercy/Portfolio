import type { ProjectItem } from "./Database";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <div className="bg-page-bg p-5 mt-5  sm:p-7 hover:bg-sidebar-bg rounded flex flex-col-reverse md:flex-row  group">
      <img
        src={item.logo}
        alt={item.company}
        className="h-40 w-full sm:h-24 sm:w-24 md:h-30 md:w-25 rounded-md object-contain shrink-0 mr-5 mt-5 sm:self-start"
      />
      <div className="mt-5">
        <a href={item.link}>
          <h3 className="text-text-primary mt-3 md:mt-0 text-base sm:text-lg transition-colors duration-200 group-hover:text-accent">
            {item.company}
          </h3>
        </a>
        <ul className="space-y-3 mb-5">
          {item.highlights.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 text-text-secondary text-sm sm:text-base leading-relaxed"
            >
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm bg-accent/10 text-accent px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
