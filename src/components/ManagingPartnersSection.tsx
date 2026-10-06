import Image from "next/image";
import Reveal from "./Reveal";
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
              className="group scroll-mt-28 border-t border-charcoal/15 py-12 sm:py-14 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,2.05fr)] lg:items-start lg:gap-x-7 lg:py-20"
            >
              {partner.image ? (
                <div className="relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden border border-charcoal/10 sm:max-w-[22rem] lg:max-w-none">
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

              <div className="mt-8 lg:mt-0 lg:pl-6">
                <h3 className="max-w-[10ch] font-serif text-[2.45rem] font-medium leading-[0.98] text-primary sm:text-5xl lg:text-[3.4rem]">
                  {partner.name}
                </h3>
                <span className="mt-5 block font-sans text-[0.65rem] font-semibold uppercase tracking-label text-gold">
                  {partner.role}
                </span>
                <GoldRule className="mt-7 w-10 transition-all duration-500 group-hover:w-20" />

              </div>

              <div className="mt-9 space-y-6 lg:mt-0 lg:max-w-[46rem] lg:pl-7 xl:pl-10">
                {partner.biography.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraph}
                    className={
                      paragraphIndex === 0
                        ? "font-serif text-[1.45rem] font-medium leading-[1.32] text-primary sm:text-[1.68rem]"
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
