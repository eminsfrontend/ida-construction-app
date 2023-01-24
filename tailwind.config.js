/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)'],
        monts: ["Montserrat, sans-serif"],
      },
      fontSize: {
        "4xl": "32px"
      },
      colors: {
        dark: "#141414"
      },
      gridTemplateColumns: {
        customGrid: '30% 40% 30%'
      },
      boxShadow: {
        customShadow: "2px 0 20px rgba(0, 0, 0, 0.25)",
        customShadow2: "0 2px 20px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}
