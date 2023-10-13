/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.html", "./src/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        almarai: "'Almarai', sans-serif",
        grenze: "'Grenze', serif",
        sofia: "'Sofia Sans Extra Condensed', sans-serif",
      },
      zIndex: {
        n1: -1,
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.6)",
        "black-rgb": "rgb(77, 79, 87)",
        hovercolor: "#ff8fad",
      },
      screens: {
        widescreen: {raw: "(min-aspect-ratio: 3/2)"},
        tallscreen: {raw: "(max-aspect-ratio: 13/20)"},
      },
      keyframes: {
        "open-menu": {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2rem))",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.2s ease-in-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
