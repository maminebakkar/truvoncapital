"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export type Capability = {
  n: string;
  title: string;
  body: string[];
};

export default function CapabilitiesAccordion({
  capabilities,
}: {
  capabilities: Capability[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-stretch lg:gap-14">
      <Reveal>
        <div className="border-t border-charcoal/15">
          {capabilities.map((capability, index) => {
            const isOpen = openIndex === index;
            const triggerId = `capability-trigger-${index}`;
            const panelId = `capability-panel-${index}`;

            return (
              <div key={capability.n} className="border-b border-charcoal/15">
                <h2>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? null : index))
                    }
                    className="group grid min-h-24 w-full grid-cols-[3.25rem_minmax(0,1fr)_2.75rem] items-center gap-4 py-6 text-left sm:min-h-28 sm:grid-cols-[4.5rem_minmax(0,1fr)_3rem] sm:gap-6 sm:py-7"
                  >
                    <span
                      aria-hidden="true"
                      className={`font-serif text-4xl font-medium leading-none transition-colors duration-500 sm:text-5xl ${
                        isOpen ? "text-gold/75" : "text-primary/[0.16] group-hover:text-gold/60"
                      }`}
                    >
                      {capability.n}
                    </span>
                    <span className="max-w-[25ch] font-serif text-[1.4rem] font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl">
                      {capability.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative flex h-11 w-11 items-center justify-center justify-self-end rounded-sm border transition-colors duration-500 sm:h-12 sm:w-12 ${
                        isOpen
                          ? "border-primary bg-primary"
                          : "border-gold/55 bg-transparent group-hover:border-gold"
                      }`}
                    >
                      <span
                        className={`absolute h-px w-4 transition-colors duration-500 ${isOpen ? "bg-gold" : "bg-primary"}`}
                      />
                      <span
                        className={`absolute h-4 w-px transition-all duration-500 ${
                          isOpen ? "scale-y-0 bg-gold" : "scale-y-100 bg-primary"
                        }`}
                      />
                    </span>
                  </button>
                </h2>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-5 pb-8 pl-[4.25rem] pr-2 sm:pb-9 sm:pl-24 sm:pr-16">
                      {capability.body.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="max-w-2xl font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal
        as="figure"
        delay={100}
        className="relative overflow-hidden rounded-sm border border-charcoal/10 bg-offwhite shadow-[0_28px_70px_-48px_rgba(4,64,41,0.45)] lg:h-full lg:min-h-0 lg:self-stretch"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-10 w-px bg-gold/70"
        />
        <Image
          src="/images/what-we-do-capabilities-accordion.jpg"
          alt="A limestone and bronze colonnade overlooking a financial district"
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className={`object-cover object-center transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none lg:absolute ${
            openIndex === null ? "scale-100" : "scale-[1.04]"
          }`}
        />
        <div className="aspect-[4/5] lg:hidden" aria-hidden="true" />
      </Reveal>
    </div>
  );
}
