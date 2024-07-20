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
      fontSize:{
        primary: "4rem",
        secondary: "3rem",
        tertiary: "2rem",
      },
      colors:{
        background: "#171717",
        hover: "#30303073",
        primary: "#e9e9e9"
      
      }
    },
  },
  plugins: [],
}