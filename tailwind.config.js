/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'banner':"url('./assets/banner.png')",
      }),
    },
  },
  plugins: [],
}