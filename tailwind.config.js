/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'yellowlogo': "#FFA730",
        'bluelogo': "#263787",
        'greenlogo': '#C8CB83',
        'greenlogo2': '#656F0C'
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
