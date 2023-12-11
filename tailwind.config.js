/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        agatha: ['Agatha', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        freemono: ['Free Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}