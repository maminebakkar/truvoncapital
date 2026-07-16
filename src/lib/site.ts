export const SITE = {
  name: "Truvon Capital",
  url: "https://www.truvoncapital.com",
  email: "info@truvoncapital.com",
  tagline: "Private markets. Trusted relationships. Disciplined execution.",
  description:
    "Truvon Capital is a global private markets platform designed to capitalize on today's multi-dimensional, rapidly evolving investment landscape.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Our approach", href: "/our-approach" },
  { label: "About us", href: "/about-us" },
];

export const CONTACT_NAV: NavItem = { label: "Contact us", href: "/contact" };
