/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        construction: {
          yellow: '#f59e0b',
          yellowLight: '#fbbf24',
          yellowDark: '#d97706',
          gray: '#1f2937',
          grayLight: '#374151',
          grayLighter: '#4b5563',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

