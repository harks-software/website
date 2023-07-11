const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,tsx,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-open-sans)", ...fontFamily.sans],
      body: ["var(--font-open-sans)"],
    },
    extend: {
      colors: {
        "yellow.700": "#554402",
        "yellow.600": "#AA8805",
        "yellow.500": "#FFCC07",
        "yellow.400": "#FFE583",
        "yellow.300": "#FFEEAC",
        "red.700": "#400A0F",
        "red.600": "#7F141F",
        "red.500": "#BF1E2E",
        "red.400": "#D47B84",
        "red.300": "#EAA8AF",
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
      },
      fontFamily: {
        oswald: "var(--font-oswald)",
        montserrat: "var(--font-montserrat)",
        bebas: "var(--font-bebas-neue)",
        architects: "var(--font-architects-daughter)",
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
