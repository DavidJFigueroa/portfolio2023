/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
    "./sr/**/*.html",
    "./src/js/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: "'Almarai', sans-serif",
        grenze: "'Grenze', serif",
        sofia: "'Sofia Sans Extra Condensed', sans-serif",
        passion: "'Passion One', sans-serif;",
        right: "'Righteous', sans-serif;",
        shadow: "'Shadows Into Light', cursive;",
        gara: "'Cormorant Garamond', serif;",
        monserat: "'Montserrat', sans-serif;",
        yanone: "'Yanone Kaffeesatz', sans-serif;",
      },
      backgroundImage: {
        contact: "url('../images/bg-2.png')",
        texture1: "url('../images/bgtexture1.jpg')",
        texture3: "url('../images/bgtexture3.jpg')",
        texture4: "url('../images/bgtexture4.jpg')",
        texture6: "url('../images/bgtexture6.jpg')",
        texture7: "url('../images/bgtexture7.jpg')",
        texture8: "url('../images/bgtexture8.jpg')",
        texture12: "url('../images/bgtexture12.jpg')",
        texture13: "url('../images/bgtexture13.jpg')",
  
      },
      zIndex: {
        n1: -1,
      },
      colors: {
       
        // bgcolor1: "#EDD7BB",
        bgcolor1: "#E4E4E4",
        bgcolor2: "#9C2CC3",
        textcolor1: "#5D446C",
        textcolor2: "#FF8FAD",
        textcolor3: "#FBFF43",
        textcolor4: "#8578F1",
        textcolor5: "#AA1679",
        textcolor6: "#5DFD19",
        textcolor7: "#FEC603",
        textcolor8: "#fb08a2",
        textcolor9: "#9B0093",
        textcolor10: "#DA9AF4",
        textcolor11: "#BEFED9",
        textcolor12: "#FC4209",
        // textcolor1op: "rgba(93,68,108, 0.8)",
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
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
      },
      animation: {
        "open-menu": "open-menu 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
