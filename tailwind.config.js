/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Chỉ cần sử dụng 'content'
  darkMode: false, // Hoặc 'media' hoặc 'class'
  theme: {
    extend: {
      colors: {
        'color-brand': '#3BB77E',
      },
    },
  },
  plugins: [],
}
