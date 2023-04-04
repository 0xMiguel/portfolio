/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        // sm: '0px 1px 3px 0px #00000014',
        sm: '0px 1px 1px rgba(18, 18, 18, 0.3)',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(180deg, #8080FF 0%, #AA99FF 100%)',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        sm: ['0.875rem'],
        md: ['1rem'],
        lg: ['1.125rem'],
        xl: ['1.25rem'],
        '2xl': ['1.5rem'],
        '3xl': ['1.875rem'],
        '4xl': ['2.25rem'],
        '6xl': ['3.75rem'],
      },
      colors: {
        'base': '#1F2937',
        'blue-500': '#2E88F6',
        'indigo-600': '#A6B4FC',
        'tertiary-50': '#272727',
        'tertiary-200': '#434343',
        'purple-500': '#D07FFF',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      borderRadius: {
        md: '0.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
