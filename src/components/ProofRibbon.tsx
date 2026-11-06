import { useState } from "react";
import { Pause, Play } from "lucide-react";

const metrics = [
  { value: "1st", label: "Pima Health Hackathon" },
  { value: "Winner", label: "Green Advocates Competition, LAUTECH" },
  { value: "16%", label: "usability improvement at Cephas ICT Hub" },
  { value: "2 hrs", label: "to build TrustVax at the hackathon" },
  { value: "4 min", label: "to pitch and demo it, and take first place" },
  { value: "4", label: "verification steps in the KYC flow at Ransact" },
  { value: "3", label: "organisations worked with" },
  { value: "5", label: "projects built" },
  { value: "Live", label: "Ojiva, deployed on Render with tested core flows" },
  { value: "2026", label: "OPay and Google National Innovation Challenge entry" },
];

function Group({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center ${
        duplicate
          ? "motion-reduce:hidden"
          : "motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center"
      }`}
    >
      {metrics.map(({ value, label }) => (
        <li key={label} className="flex items-center">
          <div className="flex items-baseline gap-3 px-7 py-7 sm:px-9">
            <span className="text-4xl leading-none font-extrabold tracking-tight whitespace-nowrap sm:text-5xl">
              {value}
            </span>
            <span className="max-w-[12rem] text-sm leading-snug font-semibold text-paper/75">
              {label}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-pen"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ProofRibbon() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-label="Highlights"
      className="group relative bg-ink text-paper"
    >
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] motion-reduce:[mask-image:none]">
        <div
          className={`flex w-max animate-[ribbon_70s_linear_infinite] group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none ${
            paused ? "[animation-play-state:paused]" : ""
          }`}
        >
          <Group />
          <Group duplicate />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="absolute top-1/2 right-3 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-paper/30 bg-ink/90 text-paper transition-colors hover:bg-paper hover:text-ink motion-reduce:hidden"
      >
        {paused ? (
          <Play aria-hidden="true" className="size-4" />
        ) : (
          <Pause aria-hidden="true" className="size-4" />
        )}
        <span className="sr-only">
          {paused ? "Play" : "Pause"} highlights
        </span>
      </button>
    </section>
  );
}
