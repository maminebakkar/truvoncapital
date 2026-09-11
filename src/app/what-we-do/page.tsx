import type { Metadata } from "next";
import Image from "next/image";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import CapabilitiesAccordion from "@/components/CapabilitiesAccordion";
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
      <section className="bg-offwhite py-20 lg:py-24">
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-[minmax(0,5.75fr)_minmax(0,6.25fr)] lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Our role</Eyebrow>
              <GoldRule draw className="mt-5" />
            </Reveal>
            <Reveal
              as="p"
              className="mt-8 w-full font-serif text-[1.65rem] font-medium leading-[1.3] text-primary"
            >
              We identify and assess high-potential private market opportunities,
              frame them clearly for our relevant capital partners, and leverage
              the depth of our network, experience and expertise to move with
              purpose from interest to action.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mt-6 w-full font-sans text-lg leading-relaxed text-charcoal/75"
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
            className="relative self-center overflow-hidden rounded-sm border border-charcoal/10 bg-white shadow-[0_28px_70px_-48px_rgba(4,64,41,0.45)] lg:self-end lg:max-xl:aspect-[4/3]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-px bg-gold/70"
            />
            <Image
              src="/images/what-we-do-our-role.jpg"
              alt="A limestone terrace overlooking a global financial district"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full lg:max-xl:h-full lg:max-xl:object-cover lg:max-xl:object-center"
            />
          </Reveal>
        </div>
      </section>

      {/* Capabilities — compact editorial accordion */}
      <section className="border-t border-charcoal/10 bg-white py-20 lg:py-28">
        <div className="container-editorial">
          <Reveal>
            <Eyebrow>Our capabilities</Eyebrow>
            <GoldRule draw className="mt-5" />
          </Reveal>

          <CapabilitiesAccordion capabilities={capabilities} />
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
