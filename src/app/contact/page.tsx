import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Reveal from "@/components/Reveal";
import { Eyebrow, GoldRule } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "We welcome conversations with investors, business owners, advisers and partners who share our standards and long-term approach.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Masthead
        eyebrow="Contact us"
        titleLines={[<>Begin a conversation</>, <>with Truvon Capital</>]}
        intro={
          <p>
            We welcome conversations with investors, business owners, advisers and
            partners who share our standards and long-term approach.
          </p>
        }
      />

      <section className="bg-offwhite py-28 lg:py-36">
        <div className="container-editorial">
          {/*
            V1 is intentionally mailto-only — no backend.
            A <form> can replace the block below later (fields → server
            action / API route) without touching the surrounding layout.
          */}
          <Reveal>
            <Eyebrow>Enquiries</Eyebrow>
            <GoldRule draw className="mt-5" />
            <p className="mt-10 font-serif text-2xl font-medium text-primary sm:text-3xl">
              For enquiries, please contact:
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-10">
            <a
              href={`mailto:${SITE.email}`}
              className="group block w-fit"
              aria-label={`Email ${SITE.email}`}
            >
              <span className="block break-all font-serif text-[clamp(1.9rem,6vw,4.5rem)] font-medium leading-tight text-primary transition-colors duration-300 group-hover:text-primary/80">
                {SITE.email}
              </span>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-full origin-left scale-x-[0.18] bg-gold transition-transform duration-700 ease-out-quint group-hover:scale-x-100"
              />
              <span className="mt-5 inline-flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-wide text-gold">
                Email Truvon Capital
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={220} className="mt-20 border-t border-charcoal/10 pt-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="eyebrow text-charcoal/45">Website</span>
              <a
                href={SITE.url}
                className="link-underline w-fit font-serif text-2xl font-medium text-primary"
              >
                www.truvoncapital.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
