/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "background-color": "var(--background)",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%": {
            rotate: "0deg",
          },
          "33%": {
            rotate: "-15deg",
          },
          "66%": {
            rotate: "20deg",
          },
          "100%": {
            rotate: "0deg",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
