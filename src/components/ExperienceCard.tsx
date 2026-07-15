import type { ExperienceItem } from "./Database";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="bg-page-bg p-5 mt-5  sm:p-7 hover:bg-sidebar-bg rounded">
      <img
        src={item.logo}
        className=" h-15 w-15 rounded-md object-contain"
        alt={item.company}
      />
      <div>
        <h3 className="text-text-primary md:mt-5 font-bold text-base sm:text-lg mt-5">
          {item.role} {item.company}
        </h3>

      <ul className="space-y-3 mb-5">
        {item.highlights.map((point, i) => (
          <li
            key={i}
            className="flex gap-3 text-text-secondary text-sm sm:text-base leading-relaxed"
          >
            <span className="text-accent mt-1.5">•</span>
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
