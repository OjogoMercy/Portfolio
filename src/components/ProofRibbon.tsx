import { useEffect, useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);

  /* The ribbon speeds up while you scroll and eases back, so it reacts to a thumb as well as a wheel. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let boost = 0;
    let frame = 0;

    const tick = () => {
      boost *= 0.95;
      const animation = track.getAnimations()[0];
      if (animation) animation.playbackRate = 1 + boost;
      if (boost > 0.02) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        if (animation) animation.playbackRate = 1;
      }
    };
    const onScroll = () => {
      const y = window.scrollY;
      boost = Math.min(boost + Math.abs(y - lastY) * 0.06, 9);
      lastY = y;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      aria-label="Highlights"
      className="group relative bg-ink text-paper"
    >
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] motion-reduce:[mask-image:none]">
        <div
          ref={trackRef}
          className={`flex w-max animate-[ribbon_45s_linear_infinite] group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none ${
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
        className="absolute top-1/2 right-3 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-paper/30 bg-ink/90 text-paper transition-colors hover:bg-paper hover:text-ink active:scale-95 motion-reduce:hidden"
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
