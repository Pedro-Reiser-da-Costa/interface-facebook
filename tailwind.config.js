/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'azul-facebook': '#0866ff' ,
        'cinza-facebook': '#f0f2f5',
        'verde-facebook': '#42b72a',
        'footer-facebook': '#96a8ba',
      },

      fontFamily: {
        'montserrat': ['Montserrat'],
    },

    spacing: {
      '580': '580px',
    }
    },
  },
  plugins: [],
}

