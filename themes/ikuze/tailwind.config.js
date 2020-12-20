module.exports = {
  purge: [
    './templates/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'himawari': '#FFCD03',
        'yamabuki': '#F9B81A',
        'usuasagi': '#90CFD4',
        'shinbashi': '#5AC3D9',
        'ninjin': '#F57840',
        'niiro': '#D05226',
        'asagi': '#438889',
        'nando': '#036273',
        'karakurenai': '#CA424F',
        'akane': '#951F1F',
        'yanagi': '#B9CB65',
        'matsuba': '#73854A',
        'nadeshiko': '#E59AB6',
        'akamurasaki': '#D25383',
        'gofun': '#FCFBF6',
        'haijiro': '#ECE9E0',
        'fuji': '#A9A3Cf',
        'ouchi': '#9183B2',
        'nezumi': '#69696C',
        'nibi': '#3B393C',
      },
      fontFamily: {
        'ovLogo': ['Merienda'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3B393C',
          },
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
