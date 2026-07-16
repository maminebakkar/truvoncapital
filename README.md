# Truvon Capital

Production website for **Truvon Capital** — a global private markets platform
(private equity & M&A opportunity sourcing, capital relationships, transaction
coordination).

Built to feel like a top-tier institutional finance firm: quiet luxury,
restrained, editorial.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with brand tokens (`primary`, `gold`, `white`, `offwhite`, `charcoal`)
- **next/font** (Cormorant Garamond + Source Sans 3) — zero layout shift
- Fully **static (SSG)** — every route is prerendered
- Deploy target: **Vercel**

## Getting started

```bash
npm install
npm run assets   # regenerate logo variants, favicons & OG card from the master PNG
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Brand system

| Token      | Hex       | Usage                                              |
| ---------- | --------- | -------------------------------------------------- |
| `primary`  | `#044029` | Dark green — headers, hero, footer, primary buttons |
| `gold`     | `#B28F53` | Muted gold — accents, dividers, icons, eyebrows     |
| `white`    | `#FFFFFF` | Text on dark, cards                                 |
| `offwhite` | `#F8F7F3` | Page background, alternating sections               |
| `charcoal` | `#1F2522` | Body text                                           |

Gold is an accent only — thin rules, small icons, hover underlines. Never a large fill.

## Assets

`scripts/generate-assets.mjs` derives everything from the master logo
(`Truvon Capital Logo (White Background - High Res).PNG`) using `sharp`:

- `public/logo-dark.png` — green/gold wordmark on transparent (light surfaces)
- `public/logo-light.png` — offwhite/gold wordmark on transparent (dark surfaces)
- Favicon set (`favicon.ico`, 16/32/48, apple-touch, android-chrome), `app/icon.svg`
- `public/og-image.png` — 1200×630 branded social card
- `public/site.webmanifest`

Re-run with `npm run assets` after changing the source logo.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, metadata API, JSON-LD, header/footer
│  ├─ page.tsx              # Home
│  ├─ what-we-do/           # What we do
│  ├─ our-approach/         # Our approach
│  ├─ about-us/             # About us
│  ├─ contact/              # Contact (mailto; form-ready)
│  ├─ sitemap.ts            # /sitemap.xml
│  ├─ robots.ts             # /robots.txt
│  └─ globals.css
├─ components/              # Header, Footer, Masthead, Logo, Reveal, ui
└─ lib/                     # site config + generated logo metadata
```

## Adding a contact form later

The Contact card in `src/app/contact/page.tsx` is structured to accept a
`<form>` in place of the mailto card. Wire fields to a Next.js Server Action or
Route Handler; the layout stays unchanged. V1 intentionally ships no backend.

## Notes

- All page copy is brand/legal-approved and rendered verbatim — do not edit.
- Scroll-reveal and header transitions honor `prefers-reduced-motion`.
- Update the production domain in `src/lib/site.ts` (`SITE.url`) if it changes.
```
