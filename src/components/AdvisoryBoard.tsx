import Image from "next/image";
import Link from "next/link";
import { advisoryBoard } from "@/lib/advisory-board";
import Reveal from "./Reveal";
import { GoldRule } from "./ui";

export default function AdvisoryBoard({ preview = false }: { preview?: boolean }) {
  const titleId = preview ? "advisory-board-preview-title" : "advisory-board-title";

  return (
    <section
      id={preview ? undefined : "advisory-board"}
      aria-labelledby={titleId}
      className="scroll-mt-24 border-t border-charcoal/10 bg-offwhite py-20 lg:py-28"
    >
      <div className="container-editorial">
        <Reveal>
          <h2
            id={titleId}
            className="font-serif text-h2 font-medium text-primary"
          >
            Advisory Board
          </h2>
          <GoldRule draw className="mt-5" />
        </Reveal>

        {advisoryBoard.map((member) => (
          <Reveal
            as="article"
            key={member.id}
            id={preview ? undefined : member.id}
            className={
              preview
                ? "group mt-12 grid scroll-mt-28 items-start gap-8 sm:grid-cols-12 sm:gap-x-10 lg:mt-16 lg:gap-x-12"
                : "group mt-12 scroll-mt-28 lg:mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,2.05fr)] lg:items-start lg:gap-x-7"
            }
          >
            <div className={preview ? "sm:col-span-4" : undefined}>
              <Image
                src={member.image.src}
                alt={member.image.alt}
                width={member.image.width}
                height={member.image.height}
                sizes={preview ? "288px" : "(max-width: 640px) 320px, (max-width: 1024px) 352px, 25vw"}
                className={preview
                  ? "h-auto w-full max-w-[18rem] border border-charcoal/10"
                  : "h-auto w-full max-w-[20rem] border border-charcoal/10 sm:max-w-[22rem] lg:max-w-none"}
              />
            </div>

            <div className={preview ? "sm:col-span-8 sm:pt-2 lg:pt-5" : "mt-8 lg:mt-0 lg:pl-6"}>
              <h3 className="max-w-[10ch] font-serif text-[2.3rem] font-medium leading-[0.98] text-primary sm:text-[2.8rem] lg:text-[3.1rem]">
                {member.name}
              </h3>
              <span className="mt-5 block font-sans text-[0.65rem] font-semibold uppercase tracking-label text-gold">
                {member.role}
              </span>
              <GoldRule className="mt-7 w-10 transition-all duration-500 group-hover:w-20" />
              {preview ? (
                <>
                  <p className="mt-7 max-w-xl font-serif text-[1.45rem] font-medium leading-[1.32] text-primary sm:text-[1.68rem]">
                    {member.biography[0]}
                  </p>
                  <Link
                    href={`/about-us#${member.id}`}
                    className="group/link mt-8 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wide text-primary"
                    aria-label={`View ${member.name}'s profile`}
                  >
                    <span className="link-underline">View profile</span>
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </>
              ) : null}
            </div>

            {preview ? null : (
              <div className="mt-9 space-y-6 lg:mt-0 lg:max-w-[46rem] lg:pl-7 xl:pl-10">
                {member.biography.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0
                      ? "font-serif text-[1.45rem] font-medium leading-[1.32] text-primary sm:text-[1.68rem]"
                      : "font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
