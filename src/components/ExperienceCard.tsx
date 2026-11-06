import type { ReactNode } from "react";
import type { ExperienceItem } from "./Database";
import TagList from "./TagList";

/* Circles any percentage in a bullet, like a number marked up in a notebook */
function markUp(text: string): ReactNode[] {
  return text.split(/(\d+%)/).map((part, i) =>
    /^\d+%$/.test(part) ? (
      <span
        key={i}
        className="mx-0.5 inline-block -rotate-2 rounded-[50%_45%_55%_45%/55%_50%_50%_45%] border-2 border-pen px-1.5 font-extrabold text-ink"
      >
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="relative grid gap-5 border-t border-ink/20 pt-8 before:absolute before:-top-[5px] before:left-0 before:size-2.5 before:rounded-full before:bg-pen before:content-[''] md:grid-cols-[260px_1fr] md:gap-10">
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
          <p className="mt-0.5 text-sm text-ink-muted">
            {item.period} · {item.location}
          </p>
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
              <span>{markUp(point)}</span>
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
