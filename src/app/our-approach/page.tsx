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

          <ol className="relative mt-12 border-y border-charcoal/15 lg:grid lg:grid-cols-2">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-charcoal/15 lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-charcoal/15 lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-offwhite lg:block"
            />
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.n}
                delay={i * 60}
                className={`group relative border-b border-charcoal/15 py-10 pl-10 last:border-b-0 sm:py-12 sm:pl-14 lg:flex lg:min-h-[18rem] lg:flex-col lg:justify-center lg:border-b-0 lg:px-14 lg:py-14 ${
                  i < 2 ? "lg:border-b lg:border-charcoal/15" : ""
                } ${i % 2 === 0 ? "lg:pr-16 xl:pr-20" : "lg:pl-16 xl:pl-20"}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-12 font-sans text-[0.65rem] font-medium tracking-[0.25em] text-gold transition-colors duration-500 group-hover:text-primary sm:top-14 lg:static lg:mb-7"
                >
                  {p.n}
                </span>
                <h2 className="font-serif text-[1.7rem] font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl lg:text-[2rem]">
                  {p.title}
                </h2>
                <GoldRule className="mt-5 w-8 transition-all duration-500 group-hover:w-14" />
                <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
                  {p.body}
                </p>
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
