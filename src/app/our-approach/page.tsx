import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, GoldRule, PeakIcon } from "@/components/ui";

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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {principles.map((p, i) => (
              <Reveal
                key={p.n}
                delay={(i % 2) * 100 + Math.floor(i / 2) * 60}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-white p-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_30px_60px_-40px_rgba(4,64,41,0.35)] lg:p-14"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-9 font-serif text-[9rem] font-medium leading-none text-primary/[0.05] transition-colors duration-500 group-hover:text-gold/[0.15]"
                >
                  {p.n}
                </span>

                <PeakIcon className="h-3.5 w-3.5" />
                <h2 className="mt-7 font-serif text-3xl font-medium leading-tight text-primary lg:text-[2.1rem]">
                  {p.title}
                </h2>
                <GoldRule className="mt-6 w-10 transition-all duration-500 group-hover:w-20" />
                <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-charcoal/75">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
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
