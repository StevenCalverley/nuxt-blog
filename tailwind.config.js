const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      spacing: {
        full: '100%',
      },
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
