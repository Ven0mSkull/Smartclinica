/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-700': '#1e40af',
        'blue-600': '#2563eb',
        'blue-200': '#bfdbfe',
      },
    },
  },
  plugins: [],
};