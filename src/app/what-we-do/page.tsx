import type { Metadata } from "next";
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
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Our role</Eyebrow>
            <GoldRule draw className="mt-5" />
          </Reveal>
          <div className="space-y-8 lg:col-span-8">
            <Reveal
              as="p"
              className="max-w-2xl font-serif text-[1.7rem] font-medium leading-[1.3] text-primary sm:text-3xl sm:leading-[1.28]"
            >
              We identify and assess high-potential private market opportunities,
              frame them clearly for our relevant capital partners, and leverage
              the depth of our network, experience and expertise to move with
              purpose from interest to action.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="max-w-2xl font-sans text-lg leading-relaxed text-charcoal/75"
            >
              Our role is not to act as a general fundraiser or conventional
              investment bank. We are focused on building a trusted platform around
              qualified opportunities, credible capital and long-term value
              creation.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities — numbered editorial rows */}
      <section className="border-t border-charcoal/10 bg-white py-16 lg:py-24">
        <div className="container-editorial">
          <Reveal>
            <Eyebrow>Our capabilities</Eyebrow>
            <GoldRule draw className="mt-5" />
          </Reveal>

          <ul className="mt-6">
            {capabilities.map((c, i) => (
              <Reveal
                as="li"
                key={c.n}
                delay={i * 60}
                className="group grid gap-6 border-b border-charcoal/10 py-14 last:border-b-0 lg:grid-cols-12 lg:gap-12 lg:py-16"
              >
                <div className="lg:col-span-2">
                  <span
                    aria-hidden="true"
                    className="font-serif text-6xl font-medium leading-none text-primary/[0.14] transition-colors duration-500 group-hover:text-gold/60 lg:text-7xl"
                  >
                    {c.n}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="max-w-[16ch] font-serif text-2xl font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 lg:text-3xl">
                    {c.title}
                  </h2>
                  <GoldRule className="mt-6 w-10 transition-all duration-500 group-hover:w-20" />
                </div>
                <div className="space-y-5 lg:col-span-6">
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
