import Link from "next/link";
import Logo from "./Logo";
import { NAV, CONTACT_NAV, SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-gold/25 bg-primary text-white/80">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 90% at 12% 0%, rgba(178,143,83,0.08) 0%, rgba(178,143,83,0) 50%), linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 100%)",
        }}
      />
      <div className="container-editorial relative z-10 py-20 text-center lg:py-24 lg:text-left">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="mx-auto flex max-w-sm flex-col items-center lg:mx-0 lg:items-start">
            <Logo variant="light" height={42} />
            <p className="mt-8 font-serif text-2xl font-medium leading-relaxed text-white/90">
              <span className="text-gold">Private</span> markets.
              <br />
              <span className="text-gold">Trusted</span> relationships.
              <br />
              <span className="text-gold">Disciplined</span> execution.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col items-center gap-3.5 lg:items-start"
          >
            <p className="eyebrow mb-3">Navigate</p>
            {[...NAV, CONTACT_NAV].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline w-fit text-sm text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3.5 lg:items-start">
            <p className="eyebrow mb-3">Contact</p>
            <a
              href={`mailto:${SITE.email}`}
              className="link-underline w-fit text-sm text-white/75 transition-colors hover:text-white"
            >
              {SITE.email}
            </a>

            <Link
              href="#main"
              className="link-underline mt-6 w-fit text-xs uppercase tracking-wide text-gold"
            >
              Back to top ↑
            </Link>
          </div>
        </div>

        <div className="my-14 h-px w-full bg-gold/20" />

        <div className="flex flex-col items-center gap-6 lg:items-start">
          <p className="max-w-4xl text-xs leading-relaxed text-white/50">
            This website is for general information only. It does not constitute
            investment advice, an offer to sell or a solicitation to buy any
            securities or investment product. Any engagement with Truvon Capital is
            subject to appropriate documentation, due diligence, conflict review and
            applicable legal and regulatory requirements.
          </p>
          <p className="text-xs tracking-wide text-white/50">
            © {year} Truvon Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
