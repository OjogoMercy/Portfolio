import type { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
      <span className="hl">{children}</span>
    </h2>
  );
}
