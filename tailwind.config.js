module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#121214",
        box: "#202024",
        boxComent: "#8D8D99",
        green: "#00B37E",
        bgClear: "#E1E1E6",
        text: "#C4C4C4",
        white: "#FFFFFF",
        line: "rgba(72, 72, 75, 0.4)"       
      },
      screens: {
        "md": {"min": "800px"}
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}
