import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { projectLinkLabel } from "./Database";
import type { ProjectItem } from "./Database";
import StoryNote from "./StoryNote";
import TagList from "./TagList";

export default function FeaturedProject({
  item,
  flip = false,
}: {
  item: ProjectItem;
  flip?: boolean;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="grid items-center gap-10 border-t border-ink/20 py-14 lg:grid-cols-2 lg:gap-16"
    >
      <div className={flip ? "lg:order-2" : ""}>
        <h3 className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
          {item.company}
        </h3>
        {item.story && (
          <div className="mt-6">
            <StoryNote story={item.story} />
          </div>
        )}
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
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-sky)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-sky)] active:scale-95"
          >
            {projectLinkLabel(item.link)}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        )}
      </div>

      <div className="mx-auto w-full max-w-[540px]">
        {/* Swipeable on phones, side by side from tablet up */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {item.screens?.map((screen) => (
            <figure
              key={screen.src}
              className="flex w-[72%] shrink-0 snap-center flex-col gap-3 transition-transform duration-300 ease-out active:scale-[0.97] sm:w-auto sm:nth-2:mt-12 sm:motion-safe:hover:-translate-y-1.5"
            >
              <div className="overflow-hidden rounded-[28px] border-[6px] border-ink bg-white shadow-[6px_7px_0_rgb(20_33_61/0.18)]">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  width={720}
                  height={1612}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
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
        <p className="mt-1 font-hand text-xl leading-none font-bold text-pen sm:hidden">
          Swipe for the next screen
        </p>
      </div>
    </article>
  );
}
