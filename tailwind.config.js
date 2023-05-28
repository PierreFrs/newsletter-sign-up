/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        desktopBg: "url('../assets/images/illustration-sign-up-desktop.svg')",
        mobileBg: "url('../assets/images/illustration-sign-up-mobile.svg')",
      },
    },
    colors: {
      primaryTomato: "hsl(4, 100%, 67%)",
      neutralDarkSlateGrey: "hsl(234, 29%, 20%)",
      neutralCharcoalGrey: "hsl(235, 18%, 26%)",
      neutralGrey: "hsl(231, 7%, 60%)",
      neutralWhite: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
