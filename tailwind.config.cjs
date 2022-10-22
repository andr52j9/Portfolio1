/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FBFFF2",
        green2: "#D1EEEC",
        orange: "#FF7F00",
      },

      fontFamily: {
        grand: "grand-central, serif",
        h11: "Londrina Outline, cursive;",
        h4: "Lora, serif;",
        p: "Inter Tight, sans-seri",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
