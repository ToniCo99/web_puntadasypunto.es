/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a8b5',
          400: '#ec7388',
          500: '#e14861',
          600: '#cc2949',
          700: '#8B1538', // Color principal
          800: '#7a1230',
          900: '#66102a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fefcf7',
          200: '#fdf8ed', // Color de fondo principal
          300: '#fbf1e0',
          400: '#f7e6cc',
          500: '#f2d7b3',
          600: '#e8c394',
          700: '#d9a871',
          800: '#c18a53',
          900: '#9d6c3f',
        },
        gold: {
          50: '#fefdf8',
          100: '#fefaeb',
          200: '#fcf3d1',
          300: '#f9e7a8',
          400: '#f5d574',
          500: '#D4AF37', // Dorado suave para acentos
          600: '#c19b2f',
          700: '#a18328',
          800: '#846b24',
          900: '#6d5723',
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
