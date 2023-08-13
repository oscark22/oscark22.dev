/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#002058",
        secondary: "#01296F",
        tertiary: "#DADADA",
      },
    },
    backgroundImage: {
      "wave-pattern": "url('/src/assets/waves.png')",
      "wave-pattern-2": "url('/src/assets/waves2.png')",
    },
  },
  plugins: [],
};
