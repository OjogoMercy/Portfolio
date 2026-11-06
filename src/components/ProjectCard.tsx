import { ArrowUpRight } from "lucide-react";
import { projectLinkLabel } from "./Database";
import type { ProjectItem } from "./Database";
import StoryNote from "./StoryNote";
import TagList from "./TagList";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <article className="relative flex flex-col gap-4 border border-ink bg-white p-4 pb-6 shadow-[5px_5px_0_var(--color-ink)] before:absolute before:-top-2.5 before:left-1/2 before:size-4 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-ink before:bg-pen before:content-['']">
      {item.badge && (
        <span className="absolute -top-4 -right-3 rotate-[4deg] rounded-md border-2 border-pen bg-white px-2.5 py-1 text-xs leading-none font-extrabold tracking-wider text-pen uppercase">
          {item.badge}
        </span>
      )}

      <img
        src={item.logo}
        alt={`${item.company} preview`}
        loading="lazy"
        decoding="async"
        className={`h-44 w-full rounded-md border border-ink/15 bg-paper ${
          item.fit === "cover" ? "object-cover object-top" : "object-contain p-6"
        }`}
      />

      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h3 className="text-2xl leading-tight font-extrabold tracking-tight">
            {item.company}
          </h3>
          {item.award && (
            <p className="text-sm font-bold text-ink-muted">{item.award}</p>
          )}
        </div>
        {item.story && <StoryNote story={item.story} />}
        {item.highlights.map((point) => (
          <p key={point} className="leading-relaxed text-ink-soft">
            {point}
          </p>
        ))}
        <div className="mt-1">
          <TagList tags={item.tags} />
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 font-bold underline decoration-marker decoration-[3px] underline-offset-4"
          >
            {projectLinkLabel(item.link)}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        )}
      </div>
    </article>
  );
}
