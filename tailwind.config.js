/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryOrange: 'hsl(25, 97%, 53%)',
        neutralWhite: 'hsl(0, 0%, 100%)',
        neutralLightGrey: 'hsl(217, 12%, 63%)',
        neutralMediumGrey: 'hsl(216, 12%, 54%)',
        neutralDarkBlue: 'hsl(213, 19%, 18%)',
        neutralVeryDarkBlue: 'hsl(216, 12%, 8%)',
      },
    },
  },
  plugins: [],
}
