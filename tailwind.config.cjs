/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'main': '690px'
      }
    },
    colors: {
      'font-primary': {
        light: '#666666',
        dark: "#333333"
      },
      white: colors.white,
      'communication': {
        'light': "#EDFCFF",
        'dark': "#3EBEFF",
      },
      'visual-arts': {
        'light': "#DCCCFF",
        'dark': "#905CFF",
      },
      'music': {
        'light': "#FFEDC8",
        'dark': "#F9B215",
      },
      'star': "#F9B215",
      'orange': "#F47759",
      'main': "#F8F8F8"

    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'PT-Sans': ['PT Sans', 'sans-serif'],
      'Lato': ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
