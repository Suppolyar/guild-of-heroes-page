/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "guild-of-heroes": "url('@/assets/guild-of-heroes-bg.jpg')",
      },
      colors: {
        footer: "#131114",
      },
    },
  },
  plugins: [],
};
