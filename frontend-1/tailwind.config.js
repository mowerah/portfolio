/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customRed: "#EF4444",
        "custom-bg": "#3B4452",
      },
      backgroundImage: {
        // "noel-bg": "flex-grow flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white", this is how you create a class for tailwind css backround
        "custom-gradient":
          "linear-gradient(to right, #1e3a8a, #6b21a8, #ec4899)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
