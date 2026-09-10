import type { Metadata } from "next";
import Image from "next/image";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, GoldRule } from "@/components/ui";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Truvon Capital operates at the intersection of capital, opportunity and execution — sourcing and qualifying private equity and M&A opportunities for credible capital.",
  alternates: { canonical: "/what-we-do" },
};

const capabilities = [
  {
    n: "01",
    title: "Opportunity sourcing and qualification",
    body: [
      "We source and assess private equity and M&A opportunities through a broad, global network of investors, owners, advisers, operators and sector specialists.",
      "Each opportunity is reviewed for strategic fit, quality, timing, available information, reputational considerations and potential alignment with relevant capital.",
    ],
  },
  {
    n: "02",
    title: "Capital relationships",
    body: [
      "We work with a focused group of single and multi-family offices, private equity firms, institutional investors and strategic capital partners in the Middle East, US, Europe and Asia.",
      "Our priority is to understand each partner's investment criteria, decision process, sector preferences, time horizon and value creation priorities.",
    ],
  },
  {
    n: "03",
    title: "Transaction coordination",
    body: [
      "Where we can add value, we support the early stages of evaluation, help create clarity around the opportunity, and coordinate the right advisers, specialists and counterparties.",
      "We focus on reducing friction, improving communication and helping parties engage with confidence.",
    ],
  },
  {
    n: "04",
    title: "Value creation ecosystem",
    body: [
      "Capital alone is rarely enough. Truvon Capital is building a broader ecosystem of operating partners, sector specialists, board members, commercial advisers and strategic relationships that can support value creation before, during and after a transaction.",
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Masthead
        eyebrow="What we do"
        titleLines={[<>A trusted platform for private market opportunities</>]}
        intro={
          <p>
            Truvon Capital operates at the intersection of capital, opportunity
            and execution.
          </p>
        }
      />

      {/* Positioning */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="container-editorial grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-5 lg:pr-4">
            <Reveal>
              <h2 className="font-serif text-h2 font-medium text-primary">
                Our role
              </h2>
              <GoldRule draw className="mt-6" />
            </Reveal>
            <Reveal
              as="p"
              className="mt-8 max-w-xl font-serif text-[1.7rem] font-medium leading-[1.3] text-primary sm:text-3xl sm:leading-[1.28]"
            >
              We identify and assess high-potential private market opportunities,
              frame them clearly for our relevant capital partners, and leverage
              the depth of our network, experience and expertise to move with
              purpose from interest to action.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-charcoal/75"
            >
              Our role is not to act as a general fundraiser or conventional
              investment bank. We are focused on building a trusted platform around
              qualified opportunities, credible capital and long-term value
              creation.
            </Reveal>
          </div>

          <Reveal
            as="figure"
            delay={100}
            className="relative min-h-[21rem] overflow-hidden rounded-sm border border-charcoal/10 bg-white shadow-[0_28px_70px_-48px_rgba(4,64,41,0.45)] sm:min-h-[26rem] lg:col-span-7 lg:min-h-0"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-px bg-gold/70"
            />
            <Image
              src="/images/what-we-do-our-role.jpg"
              alt="A limestone terrace overlooking a global financial district"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Capabilities — numbered editorial rows */}
      <section className="border-t border-charcoal/10 bg-white py-20 lg:py-28">
        <div className="container-editorial grid lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="lg:col-span-7 lg:row-start-1">
            <h2 className="font-serif text-h2 font-medium text-primary">
              Our capabilities
            </h2>
            <GoldRule draw className="mt-6" />
          </Reveal>

          <ul className="contents">
            {capabilities.map((c, i) => (
              <Reveal
                as="li"
                key={c.n}
                delay={i * 60}
                className={`group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 border-b border-charcoal/10 py-10 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-7 lg:col-span-7 lg:col-start-1 lg:py-11 ${
                  i === 0
                    ? "order-1 mt-8 lg:order-none lg:row-start-2"
                    : i === 1
                      ? "order-2 lg:order-none lg:row-start-3"
                      : i === 2
                        ? "order-4 lg:order-none lg:row-start-4"
                        : "order-5 lg:order-none lg:row-start-5"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="row-span-2 font-serif text-5xl font-medium leading-none text-primary/[0.14] transition-colors duration-500 group-hover:text-gold/60 sm:text-6xl"
                >
                  {c.n}
                </span>
                <div>
                  <h3 className="max-w-[18ch] font-serif text-2xl font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 lg:text-[1.7rem]">
                    {c.title}
                  </h3>
                  <GoldRule className="mt-5 w-10 transition-all duration-500 group-hover:w-20" />
                </div>
                <div className="mt-6 space-y-5">
                  {c.body.map((p, j) => (
                    <p
                      key={j}
                      className="max-w-2xl font-sans text-lg leading-relaxed text-charcoal/75"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal
              as="li"
              delay={100}
              className="relative order-3 my-10 aspect-[4/5] overflow-hidden rounded-sm border border-charcoal/10 shadow-[0_28px_70px_-48px_rgba(4,64,41,0.45)] lg:order-none lg:col-span-5 lg:col-start-8 lg:row-span-5 lg:row-start-1 lg:my-0 lg:aspect-auto lg:min-h-[46rem]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 z-10 w-px bg-gold/70"
              />
              <Image
                src="/images/what-we-do-capabilities.jpg"
                alt="A limestone and bronze corridor opening toward a financial district"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </ul>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}

function ClosingBand() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Image
        src="/images/what-we-do-collaborate.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,35,24,0.95) 0%, rgba(3,35,24,0.88) 38%, rgba(3,35,24,0.48) 72%, rgba(3,35,24,0.62) 100%), linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.38) 100%)",
        }}
      />
      <div className="container-editorial relative z-10 flex flex-col items-start gap-10 py-24 lg:flex-row lg:items-center lg:justify-between lg:py-28">
        <Reveal>
          <Eyebrow>Collaborate with Truvon</Eyebrow>
          <GoldRule draw className="mt-5" />
          <h2 className="mt-7 max-w-3xl font-serif text-h2 font-medium text-white">
            Considering an opportunity or seeking the right capital partner?
          </h2>
        </Reveal>
        <Reveal delay={120} className="shrink-0">
          <ButtonLink href="/contact" variant="ghost-light">
            Get in touch
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
