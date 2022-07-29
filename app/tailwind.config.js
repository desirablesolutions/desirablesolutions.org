
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400',
      ...defaultTheme.screens,
    },

    plugins: [],
  }

}