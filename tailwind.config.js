const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    colors: {
      primary: '#FF0000',
      'white-background': '#FFFFFF',
      'white-text': '#17171E',
      'dark-background': '#17171E',
      'dark-text': '#FFFFFF',
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') },
        'h5': { fontSize: theme('fontSize.base') },
        'h6': { fontSize: theme('fontSize.sm') },
      })
    })
  ]
};