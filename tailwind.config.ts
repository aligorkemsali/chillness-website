import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f4e9d4",
        sea: "#0a3d62",
        deep: "#062744",
        sunset: "#ff7a3d",
        coral: "#ff5a5f",
        foam: "#e6f0f5",
        ink: "#0b1d2a",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "wave-slow": "wave 14s ease-in-out infinite",
        "wave-fast": "wave 9s ease-in-out infinite",
        "fade-up": "fadeUp 1s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-25%) translateY(-6px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
