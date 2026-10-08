export type ManagingPartner = {
  id: string;
  name: string;
  role: string;
  summary: string;
  biography: string[];
  image?: {
    src: string;
    alt: string;
    position: string;
  };
};

export const managingPartners: ManagingPartner[] = [
  {
    id: "david-grunfeld",
    name: "David Grunfeld",
    role: "Managing Partner",
    summary:
      "Entrepreneur, investor and strategic advisor with over two decades building businesses and unlocking value in the Middle East and beyond.",
    image: {
      src: "/images/managing-partners/david-grunfeld.jpg",
      alt: "David Grunfeld, Managing Partner at Truvon Capital",
      position: "50% 38%",
    },
    biography: [
      "Entrepreneur, investor and strategic advisor with over two decades building businesses, backing founders, and helping large-scale enterprises, institutions and capital partners unlock value in the Middle East and beyond.",
      "Experience across the full private markets value chain, from leading and investing in start-ups, scale-ups and tech unicorns to advising SWFs, government bodies, institutional investors, CVCs and family offices.",
      "Has guided boards, senior executives and founders of hundreds of organizations on large-scale initiatives, from strategic growth, positioning and stakeholder engagement to fundraising, exits and IPOs, combining commercial judgement, senior global relationships, and deep regional experience to help transform opportunities into enduring value.",
    ],
  },
  {
    id: "javier-llamas",
    name: "Javier Llamas",
    role: "Managing Partner",
    summary:
      "Private-markets and financial-services executive focused on fintech, investment technology and cross-border growth.",
    image: {
      src: "/images/managing-partners/javier-llamas.png",
      alt: "Javier Llamas, Managing Partner at Truvon Capital",
      position: "50% 42%",
    },
    biography: [
      "Private-markets and financial-services executive with nearly two decades of experience spanning fintech, foreign exchange, international payments, investment technology, and cross-border growth, with a particular focus on serving fund and asset managers across Luxembourg, London, and the Channel Islands.",
      "Recent Chief Commercial Officer of a global investment-technology business, following almost 18 years at Monex Europe in senior leadership positions, including Head of Luxembourg.",
      "Experienced in raising capital for asset-backed finance strategies and engaging with institutional investors and financial institutions to develop funding solutions supported by underlying assets.",
    ],
  },
  {
    id: "mo-chaara",
    name: "Dr. Mo Chaara",
    role: "Investor",
    summary:
      "Investor, operator and strategic advisor spanning technology, AI, financial services, healthcare and mobility.",
    image: {
      src: "/images/managing-partners/mo-chaara.jpeg",
      alt: "Dr. Mo Chaara, Investor at Truvon Capital",
      position: "50% 36%",
    },
    biography: [
      "Investor, operator, and strategic advisor with 20 years of global leadership experience across technology, AI, financial services, healthcare, and mobility.",
      "Active investor and Investment Committee participant with experience across Comcast Interactive Capital, the UPS Innovation Fund, and Abdul Latif Jameel, leading strategic and technical DD, and supporting M&A and portfolio value creation.",
      "Entrepreneurial track record includes raising $20M+ in funding, building and exiting multiple technology ventures, and serving as an investor, board member, and advisor to high-growth companies.",
      "Brings a distinctive combination of capital strategy, operating expertise, technology investing, and access to global investor and executive networks across N.A., Europe, GCC, and Asia.",
    ],
  },
];
