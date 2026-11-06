import { skills } from "./Database";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TagList from "./TagList";

export default function Skills() {
  return (
    <section
      id="tools"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 pb-24 sm:px-10"
    >
      <SectionHeading>What I build with</SectionHeading>
      <div className="mt-10">
        {skills.map((group) => (
          <Reveal
            key={group.label}
            className="grid gap-3 border-t border-ink/20 py-6 md:grid-cols-[260px_1fr] md:gap-10"
          >
            <h3 className="text-sm font-bold tracking-[0.14em] text-ink-muted uppercase">
              {group.label}
            </h3>
            <TagList tags={group.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
