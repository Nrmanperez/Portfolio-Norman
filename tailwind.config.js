/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      animationDelay: {
        '0': '0s',
        '1': '1s',
        '2': '2s',
        '3': '3s',
        '4': '4s',
        // Agrega más valores de retraso según sea necesario
      },
      animation: {
        'fade-out-right': 'fade-out-right 2s ease-in-out',
        'fade-in-left': 'fade-in-left 2s ease-in-out',
      },
      keyframes: {
        'fade-out-right': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

