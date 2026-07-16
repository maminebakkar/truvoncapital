"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV, CONTACT_NAV, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Solid (offwhite) once scrolled; transparent over the hero and the overlay.
  const solid = scrolled && !open;
  const onDark = !solid;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid
            ? "bg-offwhite/95 shadow-[0_1px_0_rgba(178,143,83,0.25),0_10px_30px_-18px_rgba(4,64,41,0.4)] backdrop-blur"
            : "bg-transparent"
          }`}
      >
        <div className="container-editorial flex h-20 items-center justify-between lg:h-24">
          <Link
            href="/"
            aria-label="Truvon Capital — home"
            className="relative z-50 flex items-center py-2"
          >
            <Logo variant={onDark ? "light" : "dark"} height={42} priority />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`link-underline py-2 font-sans text-sm tracking-wide transition-colors duration-200 ${onDark
                    ? "text-white/85 hover:text-white"
                    : "text-charcoal hover:text-primary"
                  } ${isActive(item.href) ? "after:w-full" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={CONTACT_NAV.href}
              aria-current={isActive(CONTACT_NAV.href) ? "page" : undefined}
              className={`rounded-sm border px-6 py-3 font-sans text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${onDark
                  ? "border-gold/70 text-white hover:border-gold hover:bg-gold hover:text-primary"
                  : "border-gold text-primary hover:bg-primary hover:border-primary hover:text-white"
                }`}
            >
              {CONTACT_NAV.label}
            </Link>
          </nav>

          {/* Menu trigger (mobile / tablet) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-overlay"
            className="relative z-50 -mr-2 flex h-12 w-12 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-[14px] w-7" aria-hidden="true">
              <span
                className={`absolute left-0 block h-px w-7 transition-all duration-300 ${onDark ? "bg-white" : "bg-primary"
                  } ${open ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px transition-all duration-300 ${onDark ? "bg-white" : "bg-primary"
                  } ${open ? "w-7 -rotate-45" : "w-5"}`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-7 transition-all duration-300 ${onDark ? "bg-white" : "bg-primary"
                  } ${open ? "opacity-0" : "opacity-100"}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        id="menu-overlay"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-primary transition-[opacity,visibility] duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 84% 0%, rgba(178,143,83,0.15) 0%, rgba(178,143,83,0) 55%), linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <nav
          aria-label="Mobile"
          className="container-editorial relative z-10 flex flex-1 flex-col justify-center"
        >
          {[...NAV, CONTACT_NAV].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`group flex items-baseline justify-between border-b border-white/10 py-5 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              style={{ transitionDelay: open ? `${140 + i * 60}ms` : "0ms" }}
            >
              <span
                className={`font-serif text-4xl font-medium transition-colors duration-200 sm:text-5xl ${isActive(item.href) ? "text-gold" : "text-white group-hover:text-gold"
                  }`}
              >
                {item.label}
              </span>
              <span className="eyebrow !text-[0.6rem] text-white/40">
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>
        <div
          className={`container-editorial relative z-10 flex items-center justify-between pb-10 transition-all delay-500 duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
          <a
            href={`mailto:${SITE.email}`}
            tabIndex={open ? 0 : -1}
            className="link-underline font-sans text-sm text-white/70"
          >
            {SITE.email}
          </a>
          <span className="eyebrow !text-[0.6rem] text-white/40">
            Truvon Capital
          </span>
        </div>
      </div>
    </>
  );
}
