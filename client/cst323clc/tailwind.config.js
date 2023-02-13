/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        //prioritize open sans font, otherwise rely on another sans font
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //brand color palette: tailwind will make CSS classes for these
        "brand-darkgray-1": "#1E1E1E",
        "brand-teal-1": "#22A39F",
        "brand-cream-1": "#F3EFE0",
        "brand-black-1": "#222222",
        "brand-green-1": "#30BA91",
        "brand-red-1": "#BA3049",
      },
      boxShadow: {
        //for hover effects for buttons
        darkgray: "0 0 3px 3px #1E1E1E",
        cream: "0 0 3px 3px #F3EFE0",
        teal: "0 0 3px 3px #22A39F",
      },
    },
  },
  plugins: [],
};
