/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#FBE0C3',
        'secondary': '#FFBB98',
        'textPrimary': '#7D8E95',
        'textSecondary': '#344648',
      }
    },
  },
  plugins: [],
}
