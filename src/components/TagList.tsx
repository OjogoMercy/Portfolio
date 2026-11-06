export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-ink/25 bg-white px-3 py-1 text-sm font-semibold text-ink-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
