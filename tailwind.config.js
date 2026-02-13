/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f7ab0a',
          light: '#f9c04e',
          dark: '#c48a08',
        },
        surface: {
          DEFAULT: 'rgb(36,36,36)',
          card: '#292929',
        },
      },
    },
  },
  plugins: [],
}
