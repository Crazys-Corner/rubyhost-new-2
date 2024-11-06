/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as your primary sans font
      },
    },
  },
  theme: {
    extend: {},
=======
      scrollBehavior: ['smooth'],
    },
>>>>>>> 516e1e83986951fd3a9890bdfcd16d5908823a2f
  },
  plugins: [],
}

