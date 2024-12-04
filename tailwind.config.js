/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#4b69fa",
          secondary: "#7b95fb",
          accent: "#252d67",
          neutral: "#141414",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require("daisyui")],
};
