import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, GoldRule, PeakIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Truvon Capital was founded on a simple belief: private markets work best when trust, vision and execution come together.",
  alternates: { canonical: "/about-us" },
};

const pillars = [
  {
    k: "Trust",
    v: "Relationships protected with discretion and sound judgement.",
  },
  {
    k: "Vision",
    v: "Clarity in identifying and advancing exceptional opportunities.",
  },
  {
    k: "Execution",
    v: "Disciplined coordination that endures beyond the transaction.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Masthead
        eyebrow="About us"
        titleLines={[<>Trust and vision</>, <>in one name</>]}
        intro={
          <p>
            Truvon Capital was founded on a simple belief: private markets work
            best when trust, vision and execution come together.
          </p>
        }
      />

      <section className="bg-offwhite py-28 lg:py-36">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Our name</Eyebrow>
            <GoldRule draw className="mt-5" />
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal
              as="p"
              className="max-w-2xl font-serif text-[1.7rem] font-medium leading-[1.3] text-primary sm:text-3xl sm:leading-[1.28] lg:text-[2.3rem] lg:leading-[1.26]"
            >
              Our name reflects the trust we seek to build with every partner and
              stakeholder, and the vision we bring to identifying, understanding
              and advancing exceptional opportunities.
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-charcoal/75"
            >
              We are building a durable private markets platform with the
              relationships, processes and institutional knowledge required to
              create long-term value across transactions, partnerships and future
              investment activity.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-charcoal/10 bg-white py-20 lg:py-28">
        <div className="container-editorial grid gap-10 sm:grid-cols-3 sm:gap-0">
          {pillars.map((item, i) => (
            <Reveal
              key={item.k}
              delay={i * 110}
              className={`group flex flex-col py-4 ${
                i > 0 ? "sm:border-l sm:border-charcoal/10 sm:pl-12" : ""
              } ${i < pillars.length - 1 ? "sm:pr-12" : ""}`}
            >
              <PeakIcon className="h-3.5 w-3.5" />
              <span className="mt-6 font-serif text-4xl font-medium text-primary lg:text-5xl">
                {item.k}
              </span>
              <GoldRule
                draw
                className="mt-7 w-10 transition-all duration-500 group-hover:w-20"
              />
              <p className="mt-7 max-w-xs font-sans text-base leading-relaxed text-charcoal/70">
                {item.v}
              </p>
            </Reveal>
          ))}
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
            <Eyebrow>Partner with Truvon</Eyebrow>
            <GoldRule draw className="mt-5" />
            <h2 className="mt-7 max-w-xl font-serif text-h2 font-medium text-white">
              Build enduring value on a foundation of trust.
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
