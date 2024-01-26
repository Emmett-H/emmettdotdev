/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'tektur': ['Tektur', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        background: "rgba(var(--background))",
        "primary": "rgba(var(--primary))",
      },
    },
  },
  plugins: [],
};