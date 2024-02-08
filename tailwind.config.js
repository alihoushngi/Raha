/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BEA76B",
        secondary: "#BEBEBE",
        cardColor: "#141414",
      },
    },
  },
  plugins: [],
};
