/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // adicione outras pastas, se necessário
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary_background: "#A2B5CD",
        second_background: "#6E8FAF",
        main_red: "#B22222",
        main_black: "#1A1A1A",
        main_white: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
