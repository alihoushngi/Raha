/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundMe: "#0c0c0c",
        primary: "#BEA76B",
        secondary: "#BEBEBE",
        cardColor: "#141414",
      },
    },
  },
  plugins: [],
};
