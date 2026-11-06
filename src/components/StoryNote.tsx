import type { ProjectStory } from "./Database";

export default function StoryNote({ story }: { story: ProjectStory }) {
  return (
    <div className="border border-ink/20 bg-white px-4 py-3 shadow-[3px_3px_0_rgb(20_33_61/0.12)]">
      <p className="font-hand text-2xl leading-none font-bold text-pen">
        {story.label}
      </p>
      <p className="mt-1.5 leading-snug font-semibold text-ink">{story.text}</p>
    </div>
  );
}
