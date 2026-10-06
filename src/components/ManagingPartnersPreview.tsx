import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { Eyebrow, GoldRule } from "./ui";
import { managingPartners } from "@/lib/managing-partners";

export default function ManagingPartnersPreview() {
  return (
    <section
      aria-labelledby="managing-partners-preview-title"
      className="border-t border-charcoal/10 bg-offwhite py-24 lg:py-32"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Our leadership</Eyebrow>
            <GoldRule draw className="mt-5" />
            <h2
              id="managing-partners-preview-title"
              className="mt-7 font-serif text-h2 font-medium text-primary"
            >
              Managing Partners
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-charcoal/70">
              Three complementary perspectives united by a shared commitment to
              trust, disciplined execution and long-term value creation.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid border-y border-charcoal/15 lg:mt-16 lg:grid-cols-3">
          {managingPartners.map((partner, index) => (
            <Reveal
              key={partner.id}
              delay={index * 80}
              className={
                index > 0
                  ? "border-t border-charcoal/15 lg:border-l lg:border-t-0"
                  : undefined
              }
            >
              <Link
                href={`/about-us#${partner.id}`}
                className="group flex h-full flex-col py-10 transition-colors duration-500 hover:bg-white/65 focus-visible:bg-white/65 sm:px-6 lg:px-8 lg:py-12"
                aria-label={`View ${partner.name}'s profile`}
              >
                {partner.image ? (
                  <div className="relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden border border-charcoal/10 sm:max-w-[22rem] lg:max-w-none">
                    <Image
                      src={partner.image.src}
                      alt={partner.image.alt}
                      fill
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 30vw"
                      style={{ objectPosition: partner.image.position }}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                ) : null}

                <div className="mt-8">
                  <h3 className="font-serif text-[1.8rem] font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                    {partner.name}
                  </h3>
                  <span className="mt-2 block font-sans text-[0.65rem] font-semibold uppercase tracking-label text-gold">
                    {partner.role}
                  </span>
                </div>
                <GoldRule className="mt-6 w-10 transition-all duration-500 group-hover:w-16" />
                <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-charcoal/70">
                  {partner.summary}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 self-start font-sans text-xs font-semibold uppercase tracking-wide text-primary lg:mt-auto lg:pt-10">
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
