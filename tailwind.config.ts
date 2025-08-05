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
      letterSpacing: {
        wide: "1.2px",
      },
      animation: {
        typewriter: "typewriter 3s steps(40) 1s 1 normal both",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
