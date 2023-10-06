/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [],
};
