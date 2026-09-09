"use client";

import { useState, type SVGProps } from "react";
import Reveal from "./Reveal";
import { GoldRule, PeakMotif } from "./ui";

type Sector = {
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const sectors: Sector[] = [
  { name: "Healthcare & Healthtech", icon: HealthIcon },
  { name: "Financial Services & Fintech", icon: FinanceIcon },
  { name: "Manufacturing", icon: ManufacturingIcon },
  { name: "Logistics & Mobility", icon: MobilityIcon },
  { name: "Energy", icon: EnergyIcon },
  { name: "Sports & Sportstech", icon: SportsIcon },
  { name: "Artificial Intelligence (AI)", icon: AiIcon },
  { name: "Technology & Data Centers", icon: DataIcon },
];

export default function TargetSectors() {
  const [active, setActive] = useState(0);
  const ActiveIcon = sectors[active].icon;

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

        <div className="mt-14 grid border border-charcoal/10 lg:mt-16 lg:grid-cols-12">
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
                <span className="eyebrow text-white/50">Selected focus</span>
                <span className="font-serif text-sm tracking-wide text-gold">
                  {String(active + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
                </span>
              </div>

              <div
                key={sectors[active].name}
                className="sector-symbol-enter my-auto flex items-center justify-center py-8 text-gold"
                aria-hidden="true"
              >
                <ActiveIcon className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
              </div>

              <div key={`label-${sectors[active].name}`} className="sector-label-enter">
                <span className="mb-5 block h-px w-12 bg-gold" aria-hidden="true" />
                <p aria-live="polite" className="max-w-[13ch] font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                  {sectors[active].name}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid bg-offwhite sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
            <div className="sticky top-20 z-20 flex min-h-[96px] items-center gap-4 border-b border-gold/35 bg-primary px-6 py-4 text-white shadow-[0_14px_28px_-20px_rgba(4,64,41,0.75)] sm:hidden">
              <ActiveIcon
                aria-hidden="true"
                className="h-12 w-12 shrink-0 text-gold"
              />
              <div className="min-w-0 flex-1">
                <span className="eyebrow !text-[0.58rem] text-white/45">
                  Selected sector
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
              return (
                <Reveal
                  key={sector.name}
                  delay={(index % 4) * 45}
                  className="border-b border-charcoal/10 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0"
                >
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={`group relative flex min-h-[104px] w-full items-center gap-5 overflow-hidden px-6 py-6 text-left transition-colors duration-500 sm:min-h-[128px] sm:px-8 lg:min-h-[80px] lg:px-10 lg:py-5 ${
                      selected ? "bg-white" : "hover:bg-white/70"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-700 ease-out-quint ${
                        selected ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    <span className="w-7 shrink-0 font-serif text-xs tracking-wide text-charcoal/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className={`h-8 w-8 shrink-0 transition-all duration-500 ${
                        selected
                          ? "scale-105 text-gold"
                          : "text-primary/55 group-hover:text-gold"
                      }`}
                    />
                    <span className={`font-serif text-xl font-medium leading-tight transition-colors duration-300 lg:text-[1.35rem] ${selected ? "text-primary" : "text-charcoal/80 group-hover:text-primary"}`}>
                      {sector.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto hidden text-gold transition-all duration-500 sm:block ${
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
