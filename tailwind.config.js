/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RussoOne: ["Russo One", "sans-serif"],
        FiraCode: ["Fira Code", "sans-serif"],
      },
    },
  },
  plugins: [],
};
