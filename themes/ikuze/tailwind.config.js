module.exports = {
  purge: [
    './templates/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ov-green': '#73854A',
      },
      fontFamily: {
        'ovLogo': ['Merienda'],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
