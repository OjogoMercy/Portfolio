import type { ExperienceItem } from "./Database";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="bg-page-bg p-5 mt-5 border-5  sm:p-7">
      <img
        src={item.logo}
        className=" h-8 w-8 rounded-md object-contain"
        alt={item.company}
      />
      <div>
        <h3 className="text-text-primary font-bold text-base sm:text-lg">{item.role}-- {item.company}</h3>
      </div>
    </div>
  );
}
