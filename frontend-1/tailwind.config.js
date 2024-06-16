/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customRed: "#EF4444",
        "custom-bg": "#17212F", // Custom background color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
