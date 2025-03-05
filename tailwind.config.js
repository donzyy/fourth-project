/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      font: {
        'wix': ['Wix Madefor Text', 'sans-serif'],
        'Smooch': ['Smooch Sans', 'sans-serif'],
        'Monomakh': ['monomakh-regular', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

