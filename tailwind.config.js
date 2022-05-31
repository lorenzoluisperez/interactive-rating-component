module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "#1d242e",
        "very-dark-blue": "#141519",
        "med-dark-blue": "#262f38",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
