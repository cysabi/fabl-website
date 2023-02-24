/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./{pages,renderer,components}/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        fabl: {
          gold: "#FFD628",
          pink: {
            DEFAULT: "#FF298F",
            dark: "#E20084",
          },
          indigo: {
            DEFAULT: "#490089",
            light: "#7F36E8",
            dark: "#3B0970",
            50: "#e4caf0",
            100: "#d3c2ea",
            200: "#bcaadc",
            300: "#9d8ac8",
            400: "#7966b4",
            500: "#5b489f",
            600: "#43347e",
            700: "#2e225c",
            800: "#1d153e",
            900: "#0c0822",
          },
        },
      },
      typography: ({ theme }) => ({
        fabl: {
          css: {
            "--tw-prose-invert-counters": theme("colors.fabl.indigo[400]"),
            "--tw-prose-invert-bullets": theme("colors.fabl.indigo[600]"),
            "--tw-prose-invert-hr": theme("colors.fabl.indigo[700]"),
            "--tw-prose-invert-quote-borders": theme("colors.fabl.indigo[700]"),
            "--tw-prose-invert-th-borders": theme("colors.fabl.indigo[600]"),
            "--tw-prose-invert-td-borders": theme("colors.fabl.indigo[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
