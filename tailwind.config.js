const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto', ...defaultTheme.fontFamily.sans
        ]

      },
      colors: {
        'brand': '#4b5320'
      },
      backgroundImage: {
        nftbg: 'url(/nftbg.jpg)',
        form: 'url(/formbg.jpg)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
