import Image from "next/image";
import Reveal from "./Reveal";
import TruvonArrow from "./TruvonArrow";
import { Eyebrow, GoldRule } from "./ui";
import { managingPartners } from "@/lib/managing-partners";

export default function ManagingPartnersSection() {
  return (
    <section
      id="managing-partners"
      aria-labelledby="managing-partners-title"
      className="scroll-mt-24 border-t border-charcoal/10 bg-offwhite py-24 lg:py-32"
    >
      <div className="container-editorial">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Our leadership</Eyebrow>
            <GoldRule draw className="mt-5" />
          </div>
          <div className="lg:col-span-8">
            <h2
              id="managing-partners-title"
              className="max-w-2xl font-serif text-h2 font-medium text-primary"
            >
              Managing Partners
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-charcoal/70">
              Complementary experience across investing, operations, advisory
              and global private markets.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-b border-charcoal/15 lg:mt-20">
          {managingPartners.map((partner, index) => (
            <Reveal
              as="article"
              key={partner.id}
              id={partner.id}
              delay={index * 70}
              className="group scroll-mt-28 border-t border-charcoal/15 py-12 sm:py-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:py-20 xl:gap-x-14"
            >
              {partner.image ? (
                <div className="relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden border border-charcoal/10 sm:max-w-[22rem] lg:col-span-3 lg:max-w-none">
                  <Image
                    src={partner.image.src}
                    alt={partner.image.alt}
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 25vw"
                    style={{ objectPosition: partner.image.position }}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              ) : null}

              <div className="mt-8 lg:col-span-3 lg:mt-0">
                <div className="flex items-start gap-3 sm:gap-4">
                  <TruvonArrow className="mt-[0.4rem] w-6 shrink-0 opacity-80 sm:mt-[0.55rem] sm:w-7 lg:mt-[0.65rem] lg:w-8" />
                  <h3 className="max-w-[10ch] font-serif text-[2.45rem] font-medium leading-[0.98] text-primary sm:text-5xl lg:text-[3.4rem]">
                    {partner.name}
                  </h3>
                </div>
                <span className="ml-9 mt-5 block font-sans text-[0.65rem] font-semibold uppercase tracking-label text-gold sm:ml-11 lg:ml-12">
                  {partner.role}
                </span>
                <GoldRule className="ml-9 mt-7 w-10 transition-all duration-500 group-hover:w-20 sm:ml-11 lg:ml-12" />

              </div>

              <div className="mt-9 space-y-6 lg:col-span-6 lg:mt-0 lg:max-w-[46rem]">
                {partner.biography.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraph}
                    className={
                      paragraphIndex === 0
                        ? "font-serif text-[1.55rem] font-medium leading-[1.32] text-primary sm:text-[1.8rem]"
                        : "font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
