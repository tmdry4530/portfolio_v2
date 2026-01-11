import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0D0D0D",
        foreground: "#E0E0E0",
        primary: {
          DEFAULT: "#0D0D0D",
          foreground: "#E0E0E0",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#A0A0A0",
        },
        accent: {
          DEFAULT: "#00FF99",
          foreground: "#0D0D0D",
          50: "#E6FFF5",
          100: "#B3FFE0",
          200: "#80FFCC",
          300: "#4DFFB8",
          400: "#1AFFA3",
          500: "#00FF99",
          600: "#00CC7A",
          700: "#00995C",
          800: "#00663D",
          900: "#00331F",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A0A0A0",
        },
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#E0E0E0",
        },
      },
      fontFamily: {
        mono: ['"Source Code Pro"', "monospace"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1rem + 1.25vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 1.2rem + 1.5vw, 2rem)",
        "fluid-3xl": "clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)",
        "fluid-4xl": "clamp(2.25rem, 1.5rem + 3.75vw, 3.5rem)",
        "fluid-5xl": "clamp(3rem, 2rem + 5vw, 4.5rem)",
      },
      letterSpacing: {
        wide: "1.2px",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0, 255, 153, 0.3)",
        "glow": "0 0 20px rgba(0, 255, 153, 0.5)",
        "glow-lg": "0 0 40px rgba(0, 255, 153, 0.7)",
        "glow-xl": "0 0 60px rgba(0, 255, 153, 0.8)",
        "inner-glow": "inset 0 0 20px rgba(0, 255, 153, 0.3)",
      },
      dropShadow: {
        "glow": "0 0 20px rgba(0, 255, 153, 0.5)",
        "glow-lg": "0 0 40px rgba(0, 255, 153, 0.7)",
      },
      backdropBlur: {
        "xs": "2px",
        "3xl": "64px",
      },
      animation: {
        typewriter: "typewriter 3s steps(40) 1s 1 normal both",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
      keyframes: {
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 5px #00FF99, 0 0 10px #00FF99, 0 0 15px #00FF99" },
          to: { boxShadow: "0 0 10px #00FF99, 0 0 20px #00FF99, 0 0 30px #00FF99" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
