const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
