import { ArrowDown, Download } from "lucide-react";
import { RESUME_URL } from "./Database";

const noteClass =
  "mt-3 text-center font-hand text-2xl leading-[1.05] font-bold text-pen lg:absolute lg:mt-0 lg:w-[130px]";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-10 pb-16 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:pt-16 lg:pb-24"
    >
      <div className="flex flex-col gap-5">
        <p className="text-sm font-bold tracking-[0.14em] text-ink-muted uppercase">
          Mercy Ojogo · Mobile and Full-Stack Engineer
        </p>
        <h1 className="text-4xl leading-[1.04] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          I build mobile products that start with{" "}
          <span className="hl">better questions</span>.
        </h1>
        <p className="max-w-[34rem] text-lg leading-relaxed text-ink-soft">
          I design and build maintainable mobile products that solve user and
          product problems, working with React Native, TypeScript, Node.js and
          PostgreSQL.
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-bold">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-[#1f8a4c]"
          />
          Open to remote roles
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-sky)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-sky)]"
          >
            View my work
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold underline decoration-marker decoration-[3px] underline-offset-[6px]"
          >
            <Download aria-hidden="true" className="size-4" />
            Download resume
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[520px]">
        <div className="relative mx-auto w-[250px]">
          <div className="overflow-hidden rounded-[38px] border-[7px] border-ink bg-white shadow-[7px_8px_0_rgb(20_33_61/0.18)]">
            <img
              src="/OjivaHomescreen.jpg"
              width={720}
              height={1612}
              fetchPriority="high"
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
            className="pointer-events-none absolute top-[53.5%] left-[5%] hidden h-[8%] w-[90%] lg:block"
          >
            <path
              vectorEffect="non-scaling-stroke"
              d="M10 22C6 8 60 3 105 4C160 5 196 12 192 23C188 34 130 38 70 36C28 35 8 31 11 20"
            />
          </svg>

          <p className={`${noteClass} lg:top-[5%] lg:right-[calc(100%+12px)] lg:text-right`}>
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
              className="mt-1 ml-auto hidden lg:block"
            >
              <path d="M4 6C24 4 40 12 52 26" />
              <path d="M42 24L53 28L52 16" />
            </svg>
          </p>

          <p className={`${noteClass} lg:top-[38%] lg:left-[calc(100%+12px)] lg:text-left`}>
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
              className="mt-1 hidden lg:block"
            >
              <path d="M60 6C40 6 22 14 10 28" />
              <path d="M8 16L9 29L21 26" />
            </svg>
          </p>

          <p className={`${noteClass} lg:top-[66%] lg:right-[calc(100%+12px)] lg:text-right`}>
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
              className="mt-1 ml-auto hidden lg:block"
            >
              <path d="M4 6C24 8 42 16 56 30" />
              <path d="M46 29L57 31L55 20" />
            </svg>
          </p>

          <figure className="relative mx-auto mt-8 w-[150px] rotate-[5deg] border border-ink bg-white p-[7px] pb-7 shadow-[4px_5px_0_rgb(20_33_61/0.18)] before:absolute before:-top-3 before:left-1/2 before:h-5 before:w-16 before:-translate-x-1/2 before:-rotate-[4deg] before:bg-marker/80 before:content-[''] lg:absolute lg:-bottom-6 lg:left-[calc(100%-30px)] lg:mt-0">
            <img
              src="/MyPicture.jpg"
              width={720}
              height={1280}
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
