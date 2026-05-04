const {theme} = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      montrealBook: 'var(--font-montrealBook)',
      montrealMedium: 'var(--font-montrealMedium)',
      serif: 'var(--font-serif)',
    },
    colors: {
      background: "#FFFCF6",
      foreground: "#2A1B04",
      accent: "#F7F4ED",
      transparent: "#00000000"
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
