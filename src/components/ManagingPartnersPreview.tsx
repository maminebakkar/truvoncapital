import Link from "next/link";
import Reveal from "./Reveal";
import { Eyebrow, GoldRule, PeakIcon } from "./ui";
import { managingPartners } from "@/lib/managing-partners";

export default function ManagingPartnersPreview() {
  return (
    <section
      aria-labelledby="managing-partners-preview-title"
      className="border-t border-charcoal/10 bg-offwhite py-24 lg:py-32"
    >
      <div className="container-editorial">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Eyebrow>Our leadership</Eyebrow>
            <GoldRule draw className="mt-5" />
            <h2
              id="managing-partners-preview-title"
              className="mt-7 font-serif text-h2 font-medium text-primary"
            >
              Managing Partners
            </h2>
          </div>
          <p className="max-w-xl font-sans text-lg leading-relaxed text-charcoal/70 lg:col-span-6 lg:col-start-7">
            Three complementary perspectives united by a shared commitment to
            trust, disciplined execution and long-term value creation.
          </p>
        </Reveal>

        <div className="mt-12 border-y border-charcoal/15 lg:mt-16">
          {managingPartners.map((partner, index) => (
            <Reveal
              key={partner.id}
              delay={index * 80}
              className={
                index > 0 ? "border-t border-charcoal/15" : undefined
              }
            >
              <Link
                href={`/about-us#${partner.id}`}
                className="group grid gap-x-7 gap-y-5 py-8 transition-colors duration-500 hover:bg-white/65 focus-visible:bg-white/65 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:px-5 lg:grid-cols-12 lg:px-7 lg:py-10"
                aria-label={`View ${partner.name}'s profile`}
              >
                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.24em] text-gold sm:col-span-1">
                  {String(index + 1).padStart(2, "0")} / 03
                </span>
                <div className="sm:col-span-1 lg:col-span-4">
                  <h3 className="font-serif text-[1.8rem] font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                    {partner.name}
                  </h3>
                  <span className="mt-2 block font-sans text-[0.65rem] font-semibold uppercase tracking-label text-gold">
                    {partner.role}
                  </span>
                </div>
                <p className="max-w-2xl font-sans text-base leading-relaxed text-charcoal/70 sm:col-start-2 sm:pr-6 lg:col-span-5 lg:col-start-auto lg:pr-10">
                  {partner.summary}
                </p>
                <span className="inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide text-primary sm:col-start-3 sm:row-start-1 sm:row-end-3 sm:self-center lg:col-span-2 lg:col-start-auto lg:row-auto lg:justify-self-end">
                  <span className="link-underline">View profile</span>
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

        <Reveal delay={140} className="mt-10">
          <Link
            href="/about-us#managing-partners"
            className="group inline-flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-wide text-primary"
          >
            <span className="link-underline">Meet our Managing Partners</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
