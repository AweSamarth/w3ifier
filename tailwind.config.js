/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    fontFamily: {
      'pressKaro':['"Press Start 2P"', 'sans-serif'],
      'Inter' : ['Inter', 'sans-serif'],
      'Poppins':['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}