/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 1px 1px rgba(18, 18, 18, 0.3)',
        'pulse': '0 0 0 0 rgba(0, 0, 0, 1)',
        'pulse-inner': '0 0 0 0 rgba(0, 0, 0, 0.7)',
        'pulse-none': '0 0 0 0 rgba(0, 0, 0, 0)',
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
        'green-500': '#85EFAC',
      },
      keyframes: {
        pulse: {
          '0%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(51, 217, 178, 0.7)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 10px rgba(51, 217, 178, 0)',
          },
          '100%': {
            transform: 'scale(0.95)',
            boxShadow: '0 0 0 0 rgba(51, 217, 178, 0)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        pulse: 'pulse 2s infinite',
      },
      borderRadius: {
        md: '0.5rem',
        full: '50%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
