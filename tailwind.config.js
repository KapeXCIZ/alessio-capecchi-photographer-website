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
      colors:{
        background: "#171717",
        hover: "#202020",
        primary: "#e9e9e9"
      
      }
    },
  },
  plugins: [],
}