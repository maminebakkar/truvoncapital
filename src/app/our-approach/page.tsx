import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, GoldRule } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "Truvon Capital is built around a disciplined approach to private market engagement: trust first, clarity in complexity, selective participation and aligned execution.",
  alternates: { canonical: "/our-approach" },
};

const principles = [
  {
    n: "01",
    title: "Trust first",
    body:
      "We protect relationships, act with discretion and seek to build confidence through transparency, reliability and sound judgement.",
  },
  {
    n: "02",
    title: "Clarity in complexity",
    body:
      "We help simplify complex private market situations by framing the opportunity, understanding stakeholder motivations and identifying the right path forward.",
  },
  {
    n: "03",
    title: "Selective participation",
    body:
      "We are selective by design, only engaging opportunities where there is a clear fit, credible timing and realistic potential to create value.",
  },
  {
    n: "04",
    title: "Aligned execution",
    body:
      "We work to align investors, owners, advisers and operating partners around outcomes that can endure beyond the transaction itself.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      <Masthead
        eyebrow="Our approach"
        titleLines={[<>Selective. Aligned.</>, <>Long-term.</>]}
        intro={
          <p>
            Truvon Capital is built around a disciplined approach to private market
            engagement.
          </p>
        }
      />

      <section className="bg-offwhite py-24 lg:py-32">
        <div className="container-editorial">
          <Reveal>
            <Eyebrow>Four principles</Eyebrow>
            <GoldRule draw className="mt-5" />
          </Reveal>

          <ol className="mt-12 border-y border-charcoal/15">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.n}
                delay={i * 60}
                className="group relative grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 border-b border-charcoal/15 py-8 last:border-b-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-6 lg:grid-cols-[5rem_minmax(0,0.85fr)_minmax(0,1.35fr)] lg:items-center lg:gap-x-10 lg:py-11"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-xs font-medium tracking-[0.25em] text-gold transition-colors duration-500 group-hover:text-primary lg:self-start lg:pt-2"
                >
                  {p.n}
                </span>
                <h2 className="font-serif text-2xl font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.7rem] lg:text-3xl">
                  {p.title}
                </h2>
                <p className="col-start-2 mt-4 max-w-2xl font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg lg:col-start-3 lg:mt-0">
                  {p.body}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-px origin-center scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100"
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 84% 0%, rgba(178,143,83,0.12) 0%, rgba(178,143,83,0) 55%), linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div className="container-editorial relative z-10 flex flex-col items-start gap-10 py-24 lg:flex-row lg:items-center lg:justify-between lg:py-28">
          <Reveal>
            <Eyebrow>A disciplined partnership</Eyebrow>
            <GoldRule draw className="mt-5" />
            <h2 className="mt-7 max-w-xl font-serif text-h2 font-medium text-white">
              Begin a conversation built on trust and alignment.
            </h2>
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <ButtonLink href="/contact" variant="ghost-light">
              Get in touch
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
