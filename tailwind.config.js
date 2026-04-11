/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E6",
          200: "#FFF3CC",
          300: "#FFEDB3",
          400: "#FFE799",
          500: "#F5E6C8",
        },
        brand: {
          50: "#EBF2FF",
          100: "#D6E4FF",
          200: "#ADC8FF",
          300: "#85ADFF",
          400: "#5C91FF",
          500: "#1E56A0",
          600: "#163D73",
          700: "#0F2B52",
          800: "#0A1F3D",
          900: "#061529",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-rajdhani)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}