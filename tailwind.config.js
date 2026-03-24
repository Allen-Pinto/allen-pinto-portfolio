/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#111118",
        surface2: "#16161F",
        border: "#1F1F2A",
        border2: "#2A2A3A",
        purple: {
          DEFAULT: "#8B5CF6",
          dim: "rgba(139,92,246,0.15)",
          glow: "rgba(139,92,246,0.06)",
        },
        text: {
          DEFAULT: "#FAFAFA",
          muted: "#6B6B7A",
          sub: "#9898A8",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body:    ["'Cabinet Grotesk'", "sans-serif"],
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "purple-sm": "0 0 20px rgba(139,92,246,0.15)",
        "purple-md": "0 0 40px rgba(139,92,246,0.2)",
        "purple-lg": "0 0 80px rgba(139,92,246,0.25)",
        "card": "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(139,92,246,0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};