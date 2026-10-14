import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import TruvonArrow from "@/components/TruvonArrow";
import { ButtonLink, Eyebrow, GoldRule } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "Truvon Capital is built around a disciplined approach to private market engagement: trust first, clarity in complexity, selective participation and aligned execution.",
  alternates: { canonical: "/our-approach" },
};

const principles = [
  {
    n: "1",
    title: "Trust first",
    body:
      "We protect relationships, act with discretion and seek to build confidence through transparency, reliability and sound judgement.",
  },
  {
    n: "2",
    title: "Clarity in complexity",
    body:
      "We help simplify complex private market situations by framing the opportunity, understanding stakeholder motivations and identifying the right path forward.",
  },
  {
    n: "3",
    title: "Selective participation",
    body:
      "We are selective by design, only engaging opportunities where there is a clear fit, credible timing and realistic potential to create value.",
  },
  {
    n: "4",
    title: "Aligned execution",
    body:
      "We work to align investors, owners and operating partners around outcomes that can endure beyond the transaction itself.",
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

      <section
        aria-labelledby="brand-film-title"
        className="border-t border-charcoal/10 bg-white py-20 lg:py-24"
      >
        <div className="container-editorial">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <GoldRule draw className="mt-5" />
            <h2
              id="brand-film-title"
              className="mt-7 font-serif text-[clamp(1.4rem,2.4vw,2.25rem)] font-medium leading-[1.2] text-primary"
            >
              A thoughtful approach to what comes next.
            </h2>
          </Reveal>

          <figure className="mt-10 overflow-hidden rounded-sm border border-charcoal/10 bg-primary shadow-[0_28px_70px_-48px_rgba(4,64,41,0.45)] lg:mt-12">
            <video
              controls
              playsInline
              preload="none"
              poster="/videos/truvon-brand-film-poster.jpg"
              width={1920}
              height={1080}
              aria-label="Truvon Capital brand film"
              className="aspect-video w-full bg-primary object-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <source src="/videos/truvon-brand-film.mp4" type="video/mp4" />
              Your browser does not support video playback.{' '}
              <a href="/videos/truvon-brand-film.mp4">Download the Truvon Capital brand film.</a>
            </video>
            <figcaption className="sr-only">
              Truvon Capital brand film.
            </figcaption>
          </figure>
        </div>
      </section>

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

                <div className="relative flex items-start gap-3">
                  <TruvonArrow className="mt-1.5 w-6 shrink-0 lg:mt-2" />
                  <h2 className="min-w-0 font-serif text-3xl font-medium leading-tight text-primary lg:text-[2.1rem]">
                    {p.title}
                  </h2>
                </div>
                <GoldRule className="ml-9 mt-6 w-10 transition-all duration-500 group-hover:w-20" />
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
