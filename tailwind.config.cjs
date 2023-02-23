/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./{pages,renderer,components}/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fabl: {
          gold: "#FFD628",
          pink: {
            DEFAULT: "#FF298F",
            dark: "#E20084",
          },
          indigo: {
            light: "#7F36E8",
            DEFAULT: "#490089",
            dark: "#3B0970",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
