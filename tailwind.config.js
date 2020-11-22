const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.js',
      './pages/**/*.jsx',
      './pages/**/*.ts',
      './pages/**/*.tsx',
      './components/**/*.js',
      './components/**/*.jsx',
      './components/**/*.ts',
      './components/**/*.tsx',
    ],
  },
  darkMode: false,
  theme: {
    colors,
    extend: {
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
  variants: {},
  plugins: [],
}
