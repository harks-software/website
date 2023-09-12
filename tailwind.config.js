/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,tsx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#ffe3e3",
          100: "#ffbdbd",
          200: "#ff9b9b",
          300: "#f86a6a",
          400: "#ef4e4e",
          500: "#e12d39",
          600: "#cf1124",
          700: "#ab091e",
          800: "#8a041a",
          900: "#610316",
        },
        yellow: {
          50: "#fffbea",
          100: "#fff3c4",
          200: "#fce588",
          300: "#fadb5f",
          400: "#f7c948",
          500: "#f0b429",
          600: "#de911d",
          700: "#cb6e17",
          800: "#b44d12",
          900: "#8d2b0b",
        },
        "orange.500": "#DF761A",
        "gray.800": "#282828",
        "beige.700": "#3E3729",
        "beige.600": "#7C6E52",
        "beige.500": "#B9A47A",
        "beige.400": "#F7DBA3",
        "beige.300": "#f0e4d4",
        "beige.200": "#F5F2EB",
        "gold.700": "#4D3912",
        "gold.600": "#9B7323",
        "gold.500": "#D29923",
        "gold.400": "#ECBE61",
        "gold.300": "#F7E2B8",
        mustard: "#E7AD36",
        cream: "#EBE4D6",
        "vmsGrey.500": "#49443E",
        "vmsGrey.100": "#EFEEE9",
        "vmsBrown.500": "#6D5F51",
      },
      animation: {
        fade15: "fadeIn 1.5s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [],
  },
};
