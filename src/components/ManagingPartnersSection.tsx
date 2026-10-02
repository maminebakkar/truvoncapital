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
              className="group scroll-mt-28 border-t border-charcoal/15 py-12 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-16 lg:py-20"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center justify-between gap-6">
                  <span className="font-sans text-[0.65rem] font-semibold tracking-[0.24em] text-gold">
                    {String(index + 1).padStart(2, "0")} / 03
                  </span>
                  <TruvonArrow className="w-[1.15rem] opacity-80" />
                </div>
                <h3 className="mt-7 max-w-[10ch] font-serif text-[2.45rem] font-medium leading-[0.98] text-primary sm:text-5xl lg:text-[3.4rem]">
                  {partner.name}
                </h3>
                <span className="mt-5 block font-sans text-[0.65rem] font-semibold uppercase tracking-label text-gold">
                  {partner.role}
                </span>
                <GoldRule className="mt-7 w-10 transition-all duration-500 group-hover:w-20" />

                {partner.image ? (
                  <div className="relative mt-9 aspect-[4/5] max-w-xs overflow-hidden">
                    <Image
                      src={partner.image.src}
                      alt={partner.image.alt}
                      fill
                      sizes="(max-width: 1024px) 320px, 28vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>

              <div className="mt-9 space-y-6 lg:col-span-8 lg:mt-0 lg:max-w-[46rem]">
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
