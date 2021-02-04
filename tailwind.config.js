const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors,
    extend: {
      colors: { transparent: 'transparent' },
      fontFamily: {
        lato: [
          'Lato',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      borderRadius: ['focus-visible'],
      borderStyle: ['focus-visible'],
      borderWidth: ['focus-visible'],
      margin: ['first'],
      position: ['focus-visible'],
    },
  },
  plugins: [],
}
