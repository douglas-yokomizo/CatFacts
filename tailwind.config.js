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
      colors: {
        'pink': '#C9ADA7',
        'light-pint': '#F2E9E4',
        'deep-purple': '#22223B',
        'purple': '#4A4E69',
        'light-purple': '#9A8C98',
      }
    },
  },
  plugins: [],
}

