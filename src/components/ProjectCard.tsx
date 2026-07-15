import type { ProjectItem } from "./Database";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <div className="bg-page-bg p-5 mt-5  sm:p-7 hover:bg-sidebar-bg rounded flex-col">
      <img
        src={item.logo}
        alt={item.company}
        className=" h-15 w-15 rounded-md object-contain"
      />
      <div>
        <h3 className="text-text-primary">{item.company}</h3>
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
      </div>
    </div>
  );
}
