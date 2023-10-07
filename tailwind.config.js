/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      lora: ["Lora", "serif"],
    },
    extend: {
      colors: {
        inputColor: "hsl(0, 0%, 96%)",
        fontColor: "hsl(0, 0%, 18%)",
        placeholderColor: "hsl(0, 0%, 46%)",
        accentColor: "hsl(274, 82%, 60%)",
        darkColor1: "hsl(0, 0%, 2%)",
        darkColor2: "hsl(0, 0%, 12%)",
        whiteColor1: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
