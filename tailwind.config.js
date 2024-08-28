/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'main': '#3483eb',
          'text': '#243b61'
        },
        transitionDuration: {
          '400': '400ms',
        },
        screens: {
          'xs': '315px', 
        },
        animation: {
          'spin-pulse': 'spin-pulse 1s infinite',
        },
        keyframes: {
          'spin-pulse': {
            '0%': { transform: 'rotate(0deg)', opacity: '1' },
            '50%': { transform: 'rotate(180deg)', opacity: '0.5' },
            '60%': { transform: 'rotate(180deg)', opacity: '1' }, /* Pause at 180 degrees */
            '100%': { transform: 'rotate(360deg)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  
  