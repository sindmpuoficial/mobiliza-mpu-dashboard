/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'sindmpu-blue': {
            dark: '#19325E',
            medium: '#5B7AA7',
            light: '#B9C6D9',
          },
          'sindmpu-neutral': '#F5F1EE',
          'sindmpu-red': '#FF4444',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          'card': '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  }