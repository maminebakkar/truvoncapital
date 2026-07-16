import type { ReactNode } from "react";
import { Eyebrow, PeakMotif } from "./ui";

type MastheadProps = {
  eyebrow?: string;
  /** Headline, one entry per line — each line gets a masked rise. */
  titleLines: ReactNode[];
  intro?: ReactNode;
  children?: ReactNode;
  size?: "hero" | "page";
};

/**
 * Deep-green masthead. Content choreographs in on load:
 * eyebrow → rule → masked headline lines → intro → CTA.
 * The fixed header sits transparently over this band.
 */
export default function Masthead({
  eyebrow,
  titleLines,
  intro,
  children,
  size = "page",
}: MastheadProps) {
  const introDelay = 300 + titleLines.length * 110;

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-primary text-white ${
        size === "hero"
          ? "min-h-[100svh] pb-28 pt-40"
          : "pb-20 pt-40 lg:pb-28 lg:pt-52"
      }`}
    >
      <Texture size={size} />

      <div className="container-editorial relative z-10 w-full">
        {eyebrow ? (
          <div className="rise" style={{ animationDelay: "80ms" }}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <span
              className="draw mt-5 block h-px w-16 bg-gold"
              style={{ animationDelay: "400ms" }}
              aria-hidden="true"
            />
          </div>
        ) : null}

        <h1
          className={`mt-8 max-w-[17ch] font-serif font-medium tracking-tight text-white ${
            size === "hero" ? "text-display" : "text-h1"
          }`}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="mask">
              <span style={{ animationDelay: `${260 + i * 110}ms` }}>{line}</span>
            </span>
          ))}
        </h1>

        {intro ? (
          <div
            className="rise mt-9 max-w-2xl space-y-5 font-sans text-lg leading-relaxed text-white/80 sm:text-xl"
            style={{ animationDelay: `${introDelay}ms` }}
          >
            {intro}
          </div>
        ) : null}

        {children ? (
          <div className="rise mt-11" style={{ animationDelay: `${introDelay + 150}ms` }}>
            {children}
          </div>
        ) : null}
      </div>

      {size === "hero" ? (
        <div
          className="rise absolute bottom-10 left-6 z-10 flex flex-col items-center gap-4 sm:left-8 lg:left-12"
          style={{ animationDelay: "1400ms" }}
        >
          <span className="eyebrow !text-[0.6rem] text-white/50 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="scroll-cue" aria-hidden="true" />
        </div>
      ) : null}
    </section>
  );
}

/**
 * Palette-safe shading: the band is pure `primary`, modelled only with
 * black/white alpha and a faint gold glow — no colors outside the system.
 */
function Texture({ size }: { size: "hero" | "page" }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 80% at 20% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 55%), radial-gradient(120% 90% at 84% 10%, rgba(178,143,83,0.17) 0%, rgba(178,143,83,0) 55%), linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.38) 100%)",
        }}
      />
      <PeakMotif
        className={
          size === "hero"
            ? "-right-24 top-1/2 h-[150%] -translate-y-1/2 opacity-[0.09] lg:-right-8"
            : "-right-32 -top-24 h-[190%] opacity-[0.07]"
        }
      />
    </>
  );
}
