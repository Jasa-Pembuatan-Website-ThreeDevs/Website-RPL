/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        accent: "#00FF66",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
