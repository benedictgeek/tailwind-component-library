/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./.storybook/preview-head.html",
    "./src/**/*.{js,ts,tsx,jsx}",
    "./node_modules/tailwind-component-library/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
