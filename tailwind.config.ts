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
        "bg-primary": "var(--bg-primary)",
        "bg-surface": "var(--bg-surface)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-light": "var(--bg-light)",
        "bg-light-alt": "var(--bg-light-alt)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-dark": "var(--text-dark)",
        "text-dark-secondary": "var(--text-dark-secondary)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-dark": "var(--accent-dark)",
        "accent-glow": "var(--accent-glow)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-left":
          "slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slow-pan": "slowPan 30s ease-in-out infinite alternate",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slowPan: {
          "0%": { transform: "scale(1.05) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-1.5%, 1%)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
