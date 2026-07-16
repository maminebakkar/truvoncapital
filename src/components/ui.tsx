import Link from "next/link";
import type { ReactNode } from "react";

/** Thin gold horizontal rule echoing the logo's flanking lines. */
export function GoldRule({
  className = "",
  width = "w-16",
  draw = false,
}: {
  className?: string;
  width?: string;
  /** Draws in from the left when a parent .reveal becomes visible. */
  draw?: boolean;
}) {
  return (
    <span
      className={`block h-px ${width} bg-gold ${draw ? "rule-draw" : ""} ${className}`}
      aria-hidden="true"
    />
  );
}

/** Small-caps eyebrow label. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Gold peak marker lifted from the logo's arrow. */
export function PeakIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 4.5 L20.5 19.5 H16.4 L12 11.4 L7.6 19.5 H3.5 Z" fill="#B28F53" />
    </svg>
  );
}

/**
 * Large abstract peak motif for dark bands — nested outlines of the
 * logo's arrow, drawn in hairline gold at very low opacity.
 */
export function PeakMotif({ className = "" }: { className?: string }) {
  const peaks = [1, 0.76, 0.52, 0.3];
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="#B28F53" strokeWidth="1">
        {peaks.map((s, i) => (
          <path
            key={s}
            opacity={0.9 - i * 0.18}
            d={`M400 ${400 - 330 * s} L${400 + 350 * s} ${400 + 320 * s} M400 ${
              400 - 330 * s
            } L${400 - 350 * s} ${400 + 320 * s}`}
          />
        ))}
        <line x1="40" y1="726" x2="760" y2="726" opacity="0.5" />
      </g>
    </svg>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost-light";
  className?: string;
};

/** Primary CTA link styled to brand tokens. */
export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonLinkProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-sm px-7 py-4 font-sans text-sm tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5";
  const variants = {
    solid:
      "bg-primary text-white shadow-[0_12px_30px_-16px_rgba(4,64,41,0.55)] hover:shadow-[0_18px_40px_-16px_rgba(4,64,41,0.6)]",
    outline:
      "border border-gold text-primary hover:bg-primary hover:border-primary hover:text-white",
    "ghost-light":
      "border border-gold/70 text-white hover:border-gold hover:bg-gold hover:text-primary",
  } as const;

  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1.5"
    >
      →
    </span>
  );

  const cls = `${base} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        <span>{children}</span>
        {arrow}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      <span>{children}</span>
      {arrow}
    </a>
  );
}
