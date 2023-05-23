/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'almost-black': '#151619',
        'dark-gray-1': '#1D1F22',
        'dark-gray-2': '#2B2D31',
        'dark-gray-3': '#35393F',
        gray: '#5A6069',
        'light-gray-1': '#7C8187',
        'light-gray-2': '#C1C4CB',
        'very-light-gray': '#E4E4E4',
        'almost-white': '#F5F5F5',
        orange: '#E46643',
        'orange-hover': '#F39765',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.orange'),
          },
        },
      }),
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
