import type { ExperienceItem } from "./Database";
import TagList from "./TagList";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="grid gap-5 border-t border-ink/20 pt-8 md:grid-cols-[260px_1fr] md:gap-10">
      <div className="flex items-center gap-4 md:items-start">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          loading="lazy"
          decoding="async"
          className="size-14 shrink-0 rounded-md border border-ink/15 bg-white object-contain p-0.5"
        />
        <div>
          <h3 className="text-xl leading-tight font-extrabold tracking-tight">
            {item.company}
          </h3>
          <p className="text-sm font-bold text-ink-muted">{item.role}</p>
        </div>
      </div>
      <div>
        <ul className="space-y-2.5">
          {item.highlights.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-ink-soft">
              <span
                aria-hidden="true"
                className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-ink"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <TagList tags={item.tags} />
        </div>
      </div>
    </article>
  );
}
