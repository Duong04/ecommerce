/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Chỉ cần sử dụng 'content'
  darkMode: false, // Hoặc 'media' hoặc 'class'
  theme: {
    extend: {
      colors: {
        'color-brand': '#3BB77E',
        'color-yellow': '#FDC040',
        'color-heading': "#253D4E",
        'color-text': "#7E7E7E",
      },
    },
  },
  plugins: [],
}
