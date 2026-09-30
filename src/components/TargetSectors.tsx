"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";
import Reveal from "./Reveal";
import { GoldRule, PeakMotif } from "./ui";

type Sector = {
  name: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const sectors: Sector[] = [
  {
    name: "Healthcare & Healthtech",
    description:
      "We target healthcare and healthtech businesses benefiting from resilient demand, innovation and market consolidation. Our focus spans healthcare services, medical products and medtech, diagnostics, digital health and healthcare software, with particular interest in businesses combining defensible market positions with clear pathways to scale.",
    icon: HealthIcon,
  },
  {
    name: "Financial Services & Fintech",
    description:
      "Our financial-services activity draws on deep experience across private markets, financial infrastructure and technology. We evaluate opportunities across payments, wealth and asset management, fund infrastructure, financial software and specialist financial-services businesses, supporting strategic acquisitions, growth investments and platform development.",
    icon: FinanceIcon,
  },
  {
    name: "Manufacturing",
    description:
      "We focus on established manufacturing and industrial businesses where new ownership can accelerate operational improvement, international expansion and consolidation. Priority opportunities include founder and family-owned businesses, succession situations, carve-outs and differentiated industrial platforms with strong customer relationships, proprietary capabilities and defensible market positions.",
    icon: ManufacturingIcon,
  },
  {
    name: "Logistics & Mobility",
    description:
      "We invest across logistics, transportation and mobility, with a focus on businesses positioned within increasingly complex supply chains and transportation networks. Opportunities include distribution, fleet and mobility platforms, automotive-related assets and technology-enabled logistics businesses where consolidation, operational improvement and digitisation can drive value creation.",
    icon: MobilityIcon,
  },
  {
    name: "Energy",
    description:
      "Our energy focus spans conventional and emerging energy, infrastructure and enabling technologies. We evaluate cash-generating assets, energy services, power and infrastructure platforms, renewables and technologies supporting the evolution of the global energy system, across acquisitions, growth investments and special situations.",
    icon: EnergyIcon,
  },
  {
    name: "Sports & Sportstech",
    description:
      "We target opportunities across the global sports ecosystem, from franchises and clubs to stadiums, venues, sports-linked real estate, media rights, commercial platforms and sports technology. Our activity combines buy-side mandates with proprietary and selectively marketed deal flow, focusing on situations where ownership, infrastructure and commercial monetisation can create long-term value.",
    icon: SportsIcon,
  },
  {
    name: "Artificial Intelligence (AI)",
    description:
      "We focus on commercially proven AI businesses where technology translates into measurable enterprise value. We target proprietary platforms, vertical AI applications and AI-enabled businesses with differentiated technology, strong customer adoption, defensible IP and scalable economics, across growth investments, control acquisitions and strategic transactions.",
    icon: AiIcon,
  },
  {
    name: "Data Centres & Technology",
    description:
      "We focus on the digital infrastructure and technology businesses underpinning the growth of cloud computing, AI and increasingly data-intensive economies. Our opportunity set spans data centres, compute and connectivity infrastructure, hosting and managed services, enterprise technology platforms and mission-critical software, with particular interest in assets benefiting from structural demand growth, high barriers to entry and recurring or contracted revenues.",
    icon: DataIcon,
  },
];

const sectorIntro =
  "Truvon Capital originates, evaluates and executes private-market opportunities across a focused set of sectors where our relationships, investment experience and capital network provide differentiated access. We work with investors on buy-side mandates while originating a curated pipeline of proprietary and selectively marketed opportunities through founders, owners, operators and transaction partners.";

export default function TargetSectors() {
  const [active, setActive] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const stickyFocusRef = useRef<HTMLDivElement>(null);
  const sectorButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const ActiveIcon = sectors[active].icon;

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    let observer: IntersectionObserver | null = null;
    let resizeFrame = 0;

    const observeMobileSectors = () => {
      observer?.disconnect();
      observer = null;

      if (!mobileQuery.matches) return;

      const focusLine = 80 + (stickyFocusRef.current?.offsetHeight ?? 96);
      const bottomInset = Math.max(0, window.innerHeight - focusLine - 1);

      observer = new IntersectionObserver(
        (entries) => {
          const focusedEntry = entries.find((entry) => entry.isIntersecting);
          if (!focusedEntry) return;

          const nextActive = Number(
            (focusedEntry.target as HTMLElement).dataset.sectorIndex,
          );

          if (Number.isNaN(nextActive)) return;
          setActive((current) =>
            current === nextActive ? current : nextActive,
          );
        },
        {
          rootMargin: `-${focusLine}px 0px -${bottomInset}px 0px`,
          threshold: 0,
        },
      );

      sectorButtonRefs.current.forEach((button) => {
        if (button) observer?.observe(button);
      });
    };

    const requestObserverReset = () => {
      if (resizeFrame) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = 0;
        observeMobileSectors();
      });
    };

    observeMobileSectors();
    window.addEventListener("resize", requestObserverReset);
    mobileQuery.addEventListener("change", requestObserverReset);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", requestObserverReset);
      mobileQuery.removeEventListener("change", requestObserverReset);
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
    };
  }, []);

  useEffect(() => {
    const mobileAndTabletQuery = window.matchMedia("(max-width: 1023px)");
    const collapseAtDesktop = () => {
      if (!mobileAndTabletQuery.matches) setExpandedMobile(null);
    };

    mobileAndTabletQuery.addEventListener("change", collapseAtDesktop);
    return () =>
      mobileAndTabletQuery.removeEventListener("change", collapseAtDesktop);
  }, []);

  return (
    <section
      aria-labelledby="target-sectors-title"
      className="border-t border-charcoal/10 bg-white py-24 lg:py-32"
    >
      <div className="container-editorial">
        <Reveal>
          <h2 id="target-sectors-title" className="eyebrow">
            Target Sectors
          </h2>
          <GoldRule draw className="mt-5" />
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 max-w-4xl font-sans text-lg leading-relaxed text-charcoal/75"
        >
          {sectorIntro}
        </Reveal>

        <div className="mt-12 grid border border-charcoal/10 lg:mt-14 lg:grid-cols-12">
          <Reveal className="relative min-h-[280px] overflow-hidden bg-primary sm:min-h-[360px] lg:col-span-5 lg:min-h-[640px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(248,247,243,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(248,247,243,0.055) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <PeakMotif className="-right-[36%] -top-[18%] h-[125%] w-[125%] opacity-[0.08]" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(178,143,83,0.16),transparent_42%),linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.28))]"
            />

            <div className="relative flex h-full min-h-[280px] flex-col justify-between p-8 sm:min-h-[360px] sm:p-11 lg:min-h-[640px] lg:p-14">
              <div className="flex items-start justify-between">
                <span className="eyebrow text-white/50">Focus sector</span>
                <span className="font-serif text-sm tracking-wide text-gold">
                  {String(active + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
                </span>
              </div>

              <div
                key={sectors[active].name}
                className="sector-symbol-enter my-auto flex items-center justify-center py-8 text-gold max-sm:[animation:none]"
                aria-hidden="true"
              >
                <ActiveIcon className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
              </div>

              <div key={`label-${sectors[active].name}`} className="sector-label-enter max-sm:[animation:none]">
                <span className="mb-5 block h-px w-12 bg-gold" aria-hidden="true" />
                <p aria-live="polite" className="max-w-[16ch] font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                  {sectors[active].name}
                </p>
                <p className="mt-5 hidden max-w-[46ch] font-sans text-sm leading-relaxed text-white/65 lg:block">
                  {sectors[active].description}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid bg-offwhite sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
            <div
              ref={stickyFocusRef}
              className="sticky top-20 z-20 flex min-h-[96px] items-center gap-4 border-b border-gold/35 bg-primary px-6 py-4 text-white shadow-[0_14px_28px_-20px_rgba(4,64,41,0.75)] sm:hidden"
            >
              <ActiveIcon
                aria-hidden="true"
                className="h-12 w-12 shrink-0 text-gold"
              />
              <div className="min-w-0 flex-1">
                <span className="eyebrow !text-[0.58rem] text-white/45">
                  Focus sector
                </span>
                <p className="mt-1 font-serif text-lg font-medium leading-tight text-white">
                  {sectors[active].name}
                </p>
              </div>
              <span className="shrink-0 font-serif text-xs tracking-wide text-gold">
                {String(active + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
              </span>
            </div>

            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const selected = active === index;
              const expanded = expandedMobile === index;
              return (
                <Reveal
                  key={sector.name}
                  delay={(index % 4) * 45}
                  className="border-b border-charcoal/10 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0"
                >
                  <button
                    ref={(button) => {
                      sectorButtonRefs.current[index] = button;
                    }}
                    data-sector-index={index}
                    type="button"
                    aria-pressed={selected}
                    aria-expanded={expanded}
                    aria-controls={`sector-description-${index}`}
                    onClick={() => {
                      setActive(index);
                      if (window.matchMedia("(max-width: 1023px)").matches) {
                        setExpandedMobile((current) =>
                          current === index ? null : index,
                        );
                      }
                    }}
                    onPointerMove={(event) => {
                      if (event.pointerType === "mouse" && active !== index) {
                        setActive(index);
                      }
                    }}
                    onFocus={() => setActive(index)}
                    className={`group relative grid min-h-[104px] w-full grid-cols-[1.75rem_2rem_minmax(0,1fr)_2.5rem] items-center gap-x-4 overflow-hidden px-6 py-7 text-left transition-colors duration-200 sm:min-h-[128px] sm:px-8 sm:duration-500 lg:flex lg:min-h-[80px] lg:gap-5 lg:px-10 lg:py-5 ${
                      selected ? "bg-white" : "hover:bg-white/70"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ease-out-quint sm:duration-700 ${
                        selected ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    <span className="w-7 shrink-0 pt-1 font-serif text-xs tracking-wide text-charcoal/35 lg:pt-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className={`h-8 w-8 shrink-0 transition-all duration-200 sm:duration-500 ${
                        selected
                          ? "scale-105 text-gold"
                          : "text-primary/55 group-hover:text-gold"
                      }`}
                    />
                    <span className={`min-w-0 font-serif text-xl font-medium leading-tight transition-colors duration-300 lg:flex-1 lg:text-[1.35rem] ${selected ? "text-primary" : "text-charcoal/80 group-hover:text-primary"}`}>
                      {sector.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 items-center justify-center justify-self-end rounded-sm border transition-colors duration-300 lg:hidden ${
                        expanded
                          ? "border-primary bg-primary"
                          : "border-gold/45 bg-transparent"
                      }`}
                    >
                      <span
                        className={`absolute h-px w-3.5 ${expanded ? "bg-gold" : "bg-primary"}`}
                      />
                      <span
                        className={`absolute h-3.5 w-px transition-transform duration-300 ${
                          expanded ? "scale-y-0 bg-gold" : "scale-y-100 bg-primary"
                        }`}
                      />
                    </span>
                    <span
                      id={`sector-description-${index}`}
                      className={`col-span-4 mt-5 border-t border-charcoal/10 pt-5 font-sans text-sm leading-relaxed text-charcoal/65 lg:hidden ${
                        expanded ? "block" : "hidden"
                      }`}
                    >
                      {sector.description}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto hidden text-gold transition-all duration-500 lg:block ${
                        selected ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconFrame({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 32a24 24 0 1 1 48 0 24 24 0 0 1-48 0Z" opacity=".28" />
      {children}
    </svg>
  );
}

function HealthIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><path d="M28 17h8v11h11v8H36v11h-8V36H17v-8h11V17Z" /><path d="M13 20h6M45 44h6" opacity=".55" /></IconFrame>;
}

function FinanceIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><path d="M18 43V31h8v12M28 43V24h8v19M38 43V17h8v26M15 47h34" /><path d="m18 25 10-8 9 3 10-9" opacity=".65" /></IconFrame>;
}

function ManufacturingIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><path d="M16 45V28l10 6V24l10 6V18h11v27H16Z" /><path d="M22 40h4M32 40h4M42 40h4M40 18v-6h5v6" opacity=".65" /></IconFrame>;
}

function MobilityIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><path d="M14 22h26v22H14V22ZM40 30h7l6 8v6H40V30ZM14 38h26" /><circle cx="22" cy="45" r="4" /><circle cx="46" cy="45" r="4" /><path d="M45 34h4" opacity=".6" /></IconFrame>;
}

function EnergyIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><path d="m36 12-15 23h11l-4 17 15-25H32l4-15Z" /><path d="M15 18l4 4M49 46l-4-4M46 15l-4 5M18 49l4-5" opacity=".55" /></IconFrame>;
}

function SportsIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><path d="M17 25v14M22 22v20M42 22v20M47 25v14M22 32h20" /><path d="M13 28v8M51 28v8" opacity=".6" /></IconFrame>;
}

function AiIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><rect x="17" y="17" width="30" height="30" rx="3" /><path d="M23 12v5M32 12v5M41 12v5M23 47v5M32 47v5M41 47v5M12 23h5M12 32h5M12 41h5M47 23h5M47 32h5M47 41h5" opacity=".6" /><path d="m23 39 5-14 5 14M25 33h6M39 25v14" /></IconFrame>;
}

function DataIcon(props: SVGProps<SVGSVGElement>) {
  return <IconFrame {...props}><rect x="17" y="15" width="30" height="10" rx="1" /><rect x="17" y="27" width="30" height="10" rx="1" /><rect x="17" y="39" width="30" height="10" rx="1" /><path d="M22 20h1M22 32h1M22 44h1M28 20h13M28 32h13M28 44h13" /></IconFrame>;
}
