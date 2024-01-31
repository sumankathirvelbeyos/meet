module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: { 300: "#64e287", 400: "#7db261" },
        gray: { 50: "#fffafa", 200: "#e8e8e8", 500: "#929292" },
        blue_gray: { 100: "#d9d9d9", 700: "#515151" },
        lime: { 600: "#d3b723" },
        light_green: { 100: "#dcf1d1", 800: "#448e1f", "800_01": "#408924" },
        red: { 200: "#f8a2a2", A700: "#ff0202" },
        deep_purple: { 300: "#8b61e6" },
        black: { 900: "#000000" },
        cyan: { 900: "#014762" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#014762,#448e1f)",
        gradient1: "linear-gradient(180deg ,[object Object])",
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
