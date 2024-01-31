/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

    },
    colors: {
      'primary-red-color': 'hsl(12, 88%, 59%)',
      'primary-dark-blue': 'hsl(228, 39%, 23%)',
      'neutral-dark-graysih-blue': 'hsl(227, 12%, 61%)',
      'neutral-very-dark-blue': 'hsl(233, 12%, 13%)',
      'neutral-very-pale-red': 'hsl(13, 100%, 96%)',
      'neutral-very-light-gray': 'hsl(0, 0%, 98%)',
      'ham-menu-bg': 'rgba(0, 0, 0, .3)'
    }
  },
  plugins: [],
}
