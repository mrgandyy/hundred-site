/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: { 900: "#0b0b0d", 800: "#111116", 700: "#15161c" },
        accent: { 400: "#FFD166", 500: "#F4C542", 600: "#E0AE2E" },
        ice: "#B8E3FF",
      },
      boxShadow: { glow: "0 0 24px rgba(244,197,66,0.25)" },
      fontFamily: {
        display: ["Orbitron", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
