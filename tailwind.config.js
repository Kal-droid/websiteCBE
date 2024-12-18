/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000080', // Navy Blue
          light: '#1a1a95',
          dark: '#00006b',
        },
        accent: {
          DEFAULT: '#98FF98', // Mint Green
          light: '#b4ffb4',
          dark: '#7cff7c',
        }
      }
    },
  },
  plugins: [],
};