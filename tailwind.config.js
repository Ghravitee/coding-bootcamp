/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Blue": "hsl(240, 38%, 20%)",
        "Grayish-Blue": "hsl(240, 18%, 77%)",
      },
      backgroundImage: {
        "pattern-background": "url('/pattern-bg.svg')",
        "pattern-curve": "url('/pattern-curve.svg')",
        "pattern-quotes": "url('/pattern-quotes.svg')",
      }
    },
  },
  plugins: [],
};
