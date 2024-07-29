/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2.5rem',
    },
    extend: {
      fontSize: {
        primary: "5rem",
        secondary: "4rem",
        tertiary: "3rem",
      },
      colors: {
        background: "#171717",
        hover: "#30303073",
        primary: "#e9e9e9",
        loading: "#171717",
      },
      maxWidth: {
        "maxx": "1100px",
      },
    },
  },
  plugins: [],
}