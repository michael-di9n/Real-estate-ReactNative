/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Extending the tailwind font names
      fontFamily: {
        "rubik": ["Rubik-Regular", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      colors: {
        "primary": ["#FFFFFF", "#FFFFFF"],
        "secondary": ["#FFFFFF", "#FFFFFF"],
        "tertiary": ["#FFFFFF", "#FFFFFF"],
        "dark": ["#FFFFFF", "#FFFFFF"],
        "light": ["#FFFFFF", "#FFFFFF"],
        "white": ["#FFFFFF", "#FFFFFF"],
      }
    },
  },
  plugins: [],
}