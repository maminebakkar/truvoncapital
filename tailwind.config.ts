import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — do not introduce colors outside these tokens.
        primary: "#044029", // Dark green
        gold: "#B28F53", // Muted gold accent
        white: "#FFFFFF",
        offwhite: "#F8F7F3", // Page background / alternating sections
        charcoal: "#1F2522", // Body text
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
        wide: "0.16em",
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      fontSize: {
        display: ["clamp(3rem, 7.5vw, 6rem)", { lineHeight: "1.02" }],
        h1: ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.06" }],
        h2: ["clamp(1.85rem, 3.2vw, 3rem)", { lineHeight: "1.12" }],
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
