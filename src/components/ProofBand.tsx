import { Projects } from "./Database";

const proof = [
  { value: "1st", label: "Pima Health Hackathon" },
  { value: "Winner", label: "Green Advocates Competition, LAUTECH" },
  { value: "16%", label: "usability improvement at Cephas ICT Hub" },
  { value: String(Projects.length), label: "projects built and shipped" },
];

export default function ProofBand() {
  return (
    <section aria-label="Highlights" className="bg-ink text-paper">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {proof.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col border-paper/20 px-5 py-8 sm:px-10 lg:border-l lg:first:border-l-0"
          >
            <dt className="order-2 mt-2 text-sm leading-snug font-semibold text-paper/75">
              {label}
            </dt>
            <dd className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
