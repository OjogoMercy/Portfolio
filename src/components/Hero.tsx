import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { ArrowDown, Download } from "lucide-react";
import { RESUME_URL } from "./Database";

const noteClass =
  "intro-note mt-3 text-center font-hand text-2xl leading-[1.05] font-bold text-pen md:absolute md:mt-0 md:w-[130px]";

const step = (i: number) => ({ "--i": i }) as CSSProperties;
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

const tap = "transition-transform active:scale-95";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLElement>(null);

  /* Tilt: follows the mouse on desktop, and follows a finger on touch screens. */
  useEffect(() => {
    const stage = stageRef.current;
    const phone = tiltRef.current;
    if (!stage || !phone) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pressed = false;

    const apply = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      const clampedX = Math.max(-1, Math.min(1, x));
      const clampedY = Math.max(-1, Math.min(1, y));
      phone.style.transform = `perspective(1000px) rotateY(${(clampedX * 10).toFixed(2)}deg) rotateX(${(-clampedY * 7).toFixed(2)}deg)`;
    };
    const reset = () => {
      pressed = false;
      phone.style.transform = "";
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      pressed = true;
      apply(e);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse" || pressed) apply(e);
    };

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", reset);
    stage.addEventListener("pointercancel", reset);
    stage.addEventListener("pointerleave", reset);
    return () => {
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", reset);
      stage.removeEventListener("pointercancel", reset);
      stage.removeEventListener("pointerleave", reset);
    };
  }, []);

  /* Parallax: the phone and the photo drift at different speeds as you scroll. */
  useEffect(() => {
    const device = deviceRef.current;
    const photo = photoRef.current;
    if (!device || !photo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wide = window.matchMedia("(min-width: 768px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, 900);
      device.style.translate = `0 ${(-y * 0.1).toFixed(1)}px`;
      photo.style.translate = wide.matches ? `0 ${(-y * 0.14).toFixed(1)}px` : "";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-10 pb-16 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:pt-16 lg:pb-24"
    >
      <div className="flex flex-col gap-5">
        <p
          style={step(0)}
          className="intro-step text-sm font-bold tracking-[0.14em] text-ink-muted uppercase"
        >
          Mercy Ojogo · Mobile and Full-Stack Engineer
        </p>
        <h1
          style={step(1)}
          className="intro-step text-4xl leading-[1.04] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          I build mobile products that start with{" "}
          <span className="hl">better questions</span>.
        </h1>
        <p
          style={step(2)}
          className="intro-step max-w-[34rem] text-lg leading-relaxed text-ink-soft"
        >
          I design and build maintainable mobile products that solve user and
          product problems, working with React Native, TypeScript, Node.js and
          PostgreSQL.
        </p>
        <p
          style={step(3)}
          className="intro-step inline-flex items-center gap-2 text-sm font-bold"
        >
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-[#1f8a4c]"
          />
          Open to remote roles
        </p>
        <div
          style={step(4)}
          className="intro-step flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <a
            href="#projects"
            className={`${tap} inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-sky)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-sky)]`}
          >
            View my work
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${tap} inline-flex items-center gap-2 font-bold underline decoration-marker decoration-[3px] underline-offset-[6px]`}
          >
            <Download aria-hidden="true" className="size-4" />
            Download resume
          </a>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto w-full max-w-[520px] touch-pan-y select-none"
      >
        <div ref={deviceRef} className="relative mx-auto w-[250px]">
          <div className="intro-phone">
            <div className="sway">
              <div
                ref={tiltRef}
                className="relative transition-transform duration-200 ease-out will-change-transform"
              >
                <div className="overflow-hidden rounded-[38px] border-[7px] border-ink bg-white shadow-[7px_8px_0_rgb(20_33_61/0.18)]">
                  <img
                    src="/OjivaHomescreen.jpg"
                    width={720}
                    height={1612}
                    fetchPriority="high"
                    draggable={false}
                    alt="Ojiva home screen showing the next immunisation, vaccination progress and each vaccine's status"
                    className="block h-auto w-full"
                  />
                </div>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 40"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="#d23a40"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={delay(0.9)}
                  className="intro-wipe pointer-events-none absolute top-[53.5%] left-[5%] hidden h-[8%] w-[90%] md:block"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    d="M10 22C6 8 60 3 105 4C160 5 196 12 192 23C188 34 130 38 70 36C28 35 8 31 11 20"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p
            style={delay(1.0)}
            className={`${noteClass} md:top-[5%] md:right-[calc(100%+12px)] md:text-right`}
          >
            Next dose, stage and doses due
            <svg
              aria-hidden="true"
              width="64"
              height="34"
              viewBox="0 0 64 34"
              fill="none"
              stroke="#d23a40"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={delay(1.3)}
              className="intro-wipe mt-1 ml-auto hidden md:block"
            >
              <path d="M4 6C24 4 40 12 52 26" />
              <path d="M42 24L53 28L52 16" />
            </svg>
          </p>

          <p
            style={delay(1.4)}
            className={`${noteClass} md:top-[38%] md:left-[calc(100%+12px)] md:text-left`}
          >
            Progress tracked for each child
            <svg
              aria-hidden="true"
              width="64"
              height="34"
              viewBox="0 0 64 34"
              fill="none"
              stroke="#d23a40"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={delay(1.7)}
              className="intro-wipe mt-1 hidden md:block"
            >
              <path d="M60 6C40 6 22 14 10 28" />
              <path d="M8 16L9 29L21 26" />
            </svg>
          </p>

          <p
            style={delay(1.8)}
            className={`${noteClass} md:top-[66%] md:right-[calc(100%+12px)] md:text-right`}
          >
            Status shown for each vaccine
            <svg
              aria-hidden="true"
              width="64"
              height="34"
              viewBox="0 0 64 34"
              fill="none"
              stroke="#d23a40"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={delay(2.1)}
              className="intro-wipe mt-1 ml-auto hidden md:block"
            >
              <path d="M4 6C24 8 42 16 56 30" />
              <path d="M46 29L57 31L55 20" />
            </svg>
          </p>

          <figure
            ref={photoRef}
            className="intro-polaroid relative mx-auto mt-8 w-[150px] rotate-[5deg] border border-ink bg-white p-[7px] pb-7 shadow-[4px_5px_0_rgb(20_33_61/0.18)] before:absolute before:-top-3 before:left-1/2 before:h-5 before:w-16 before:-translate-x-1/2 before:-rotate-[4deg] before:bg-marker/80 before:content-[''] md:absolute md:-bottom-6 md:left-[calc(100%-30px)] md:mt-0"
          >
            <img
              src="/MyPicture.jpg"
              width={720}
              height={1280}
              draggable={false}
              alt="Mercy Ojogo"
              className="aspect-[4/5] w-full object-cover object-[50%_30%]"
            />
            <figcaption className="absolute inset-x-0 bottom-1 text-center font-hand text-xl leading-none font-bold">
              Mercy Ojogo
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
