import { ArrowUpRight } from "lucide-react";
import { projectLinkLabel } from "./Database";
import type { ProjectItem } from "./Database";
import TagList from "./TagList";

export default function FeaturedProject({
  item,
  flip = false,
}: {
  item: ProjectItem;
  flip?: boolean;
}) {
  return (
    <article className="grid items-center gap-10 border-t border-ink/20 py-14 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? "lg:order-2" : ""}>
        <h3 className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
          {item.company}
        </h3>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
          {item.highlights.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
        <div className="mt-6">
          <TagList tags={item.tags} />
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-sky)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-sky)]"
          >
            {projectLinkLabel(item.link)}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        )}
      </div>

      <div className="mx-auto grid w-full max-w-[540px] grid-cols-2 gap-5 sm:gap-8">
        {item.screens?.map((screen) => (
          <figure key={screen.src} className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-[28px] border-[6px] border-ink bg-white shadow-[6px_7px_0_rgb(20_33_61/0.18)]">
              <img
                src={screen.src}
                alt={screen.alt}
                width={720}
                height={1612}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <figcaption>
              <span className="block text-sm font-bold">{screen.caption}</span>
              <span className="block font-hand text-xl leading-tight font-bold text-pen">
                {screen.note}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
