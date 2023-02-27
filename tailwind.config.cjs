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
            50: "#E5E2F3",
            100: "#CCC5E7",
            200: "#B3A9DB",
            300: "#998CCF",
            400: "#7966b4",
            500: "#5b489f",
            600: "#3B2C77",
            700: "#2C2159",
            800: "#1d153e",
            900: "#17112D",
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
