module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '411px' },
        // => @media (max-width: 411px) { ... }
      },
      colors: {
        'blue': '#44739D',
        'yellow': '#FFFF00',
        'green': '#00FF01'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
