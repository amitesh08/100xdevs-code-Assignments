/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        payTMBlue: 'rgb(224, 245, 253)', // Name it something
      },
    },
  },
  plugins: [],
}

