import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, GoldRule, PeakIcon, PeakMotif } from "@/components/ui";

export const metadata: Metadata = {
  title: "Truvon Capital | Global Private Markets Platform",
  description:
    "Truvon Capital is a global private markets platform designed to capitalize on today's multi-dimensional, rapidly evolving investment landscape.",
  alternates: { canonical: "/" },
};

const teasers = [
  {
    n: "01",
    eyebrow: "What we do",
    title: "A trusted platform for private market opportunities",
    body:
      "We operate at the intersection of capital, opportunity and execution — moving with purpose from interest to action.",
    href: "/what-we-do",
    cta: "Explore what we do",
  },
  {
    n: "02",
    eyebrow: "Our approach",
    title: (
      <>
        Selective.
        <br />
        Aligned.
        <br />
        Long-term.
      </>
    ),
    body:
      "A disciplined approach to private market engagement, built on trust, clarity and enduring alignment.",
    href: "/our-approach",
    cta: "Explore our approach",
  },
];

export default function HomePage() {
  return (
    <>
      <Masthead
        size="hero"
        eyebrow="Global Private Markets Platform"
        titleLines={[
          <>
            Elevating <em className="font-medium italic">trust</em>.
          </>,
          <>
            Unlocking <em className="font-medium italic">potential</em>.
          </>,
        ]}
        intro={
          <p>
            Truvon Capital is a global private markets platform designed to
            capitalize on today&rsquo;s multi-dimensional, rapidly evolving
            investment landscape.
          </p>
        }
      >
        <ButtonLink href="/contact" variant="ghost-light">
          Get in touch to explore collaboration opportunities with Truvon
        </ButtonLink>
      </Masthead>

      {/* Manifesto */}
      <section className="bg-offwhite py-28 lg:py-36">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Our intent</Eyebrow>
              <GoldRule draw className="mt-5" />
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal
                as="p"
                className="font-serif text-[1.7rem] font-medium leading-[1.3] text-primary sm:text-3xl lg:text-[2.6rem] lg:leading-[1.24]"
              >
                We aim to become the partner of choice for sophisticated
                investors, business owners and institutions seeking to transform
                exceptional opportunities into enduring value through trust,
                insight and disciplined execution.
              </Reveal>
              <Reveal
                as="p"
                delay={140}
                className="mt-9 max-w-2xl font-sans text-lg leading-relaxed text-charcoal/75"
              >
                We are building a global investment platform where the right
                capital, relationships and expertise come together to navigate
                complex private equity and M&amp;A opportunities with clarity and
                confidence.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Teasers — whole card is the link */}
      <section className="border-t border-charcoal/10 bg-white">
        <div className="container-editorial grid lg:grid-cols-2">
          {teasers.map((t, i) => (
            <Reveal
              key={t.href}
              delay={i * 110}
              className={
                i === 0
                  ? "border-b border-charcoal/10 lg:border-b-0 lg:border-r"
                  : ""
              }
            >
              <Link
                href={t.href}
                className={`group relative flex h-full flex-col justify-between gap-14 overflow-hidden py-20 transition-colors duration-500 lg:py-28 ${
                  i === 0 ? "lg:pr-16" : "lg:pl-16"
                }`}
              >
                <div className="relative">
                  <Eyebrow>{t.eyebrow}</Eyebrow>
                  <GoldRule
                    draw
                    className="mt-5 transition-all duration-500 group-hover:w-24"
                  />
                  <h2 className="mt-8 max-w-[15ch] font-serif text-h2 font-medium text-primary">
                    {t.title}
                  </h2>
                  <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-charcoal/70">
                    {t.body}
                  </p>
                </div>

                <span className="relative inline-flex w-fit items-center gap-3 font-sans text-sm font-semibold uppercase tracking-wide text-primary">
                  <span className="link-underline group-hover:after:w-full">
                    {t.cta}
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-primary">
        <PeakMotif className="-left-40 top-1/2 h-[220%] -translate-y-1/2 opacity-[0.06]" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(178,143,83,0.1) 0%, rgba(178,143,83,0) 55%), linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div className="container-editorial relative z-10 py-28 text-center lg:py-36">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-serif text-h2 font-medium text-white">
              Where capital, relationships and expertise converge.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We welcome conversations with investors, business owners, advisers
              and partners who share our standards and long-term approach.
            </p>
            <ButtonLink href="/contact" variant="ghost-light" className="mt-11">
              Get in touch
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
