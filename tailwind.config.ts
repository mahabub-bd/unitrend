import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // Desktop-first, like the original styled-components `device` helper:
    // each screen is a max-width query, ordered largest -> smallest so
    // narrower rules override wider ones.
    // New components use the min-width screens (sm/md/lg/xl) below.
    screens: {
      desktop: { max: "2560px" },
      laptopL: { max: "1440px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      mobileL: { max: "425px" },
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#69010E",
        secondary: "#970213",
        golden: "#dcca87",
        cream: "#f5efdb",
        ink: "#0c0c0c",
        dark: "#252B42",
        softgray: "#545454",
        lightgray: "#aaaaaa",
        palettelight: "#ECF1F0",
        porcelain: "#FBF8F4",
        sand: "#F2EBE0",
        line: "#E7DFD3",
        muted: "#6F6862",
      },
      fontFamily: {
        base: ["var(--font-comfortaa)", "sans-serif"],
        alt: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(12, 12, 12, 0.04), 0 18px 45px -20px rgba(12, 12, 12, 0.18)",
        lift: "0 24px 60px -24px rgba(105, 1, 14, 0.45)",
      },
      keyframes: {
        moveDown: {
          from: { transform: "translateX(-15rem)" },
          to: { transform: "translateX(0)" },
        },
        "tracking-in-contract": {
          "0%": { letterSpacing: "0.5em", opacity: "0" },
          "40%": { opacity: "0.6" },
          "100%": { letterSpacing: "normal", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        moveDown: "moveDown 0.2s ease-in-out",
        "moveDown-slow": "moveDown 0.5s ease-in-out",
        "tracking-in-contract":
          "tracking-in-contract 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) both",
        "fade-in": "fadeIn 0.3s ease-out both",
        "slide-in-right": "slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
