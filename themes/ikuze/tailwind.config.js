module.exports = {
  purge: [
    './templates/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ov-green': '#73854A',
        'haijiro': '#ECE9E0',
        'gofun': '#FCFBF6',
        'nezumi': '#69696C',
        'nibi': '#3B393C',
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
