/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./.storybook/preview-head.html",
    "./src/**/*.{js,ts,tsx,jsx}",
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./node_modules/tailwind-component-library/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ff7043",
        assentColor: "#2e66f6",
        grey: "#78889b",
        black: "#263238",
      },
      // fontFamily: { sans: ["Strawford", "sans-serif"] },
    },
  },
  plugins: [],
};
