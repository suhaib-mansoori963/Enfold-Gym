// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Oswald", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
        default: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
