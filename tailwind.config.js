/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js, jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  important: true,
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    styled: true,
    themes: ["dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
