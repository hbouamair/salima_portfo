import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0c0a09 85%), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(251,191,36,0.15), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slow-pan": "slowPan 28s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowPan: {
          "0%": { transform: "scale(1.08) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-2%, 1%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
