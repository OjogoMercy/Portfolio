import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export default function SectionHeading({ children }: { children: ReactNode }) {
  const ref = useReveal<HTMLHeadingElement>();

  return (
    <h2
      ref={ref}
      className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl"
    >
      <span className="hl">{children}</span>
    </h2>
  );
}
