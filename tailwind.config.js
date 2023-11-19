/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#610C9F",
        "secondary":"#940B92",
        "tertiary": "#E95793"
      }
    },
  },
  plugins: [],
}

