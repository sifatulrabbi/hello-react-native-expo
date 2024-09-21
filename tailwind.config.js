/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./assets/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rmono: ["Roboto-Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
