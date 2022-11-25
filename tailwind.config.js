/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
        Secular: ["Secular One", "sans-serif"]
      }
    },
  },
  plugins: [],
}