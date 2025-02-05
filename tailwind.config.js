module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        customBg: "rgb(24,23,21)",
      },
    },
  },
  plugins: [],
}
