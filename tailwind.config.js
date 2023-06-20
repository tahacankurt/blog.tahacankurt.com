/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend:{
      colors: {
        neuorange: '#f77f00',
        neupurpe: '#822faf',
      },
    },
    screens: {
      '2xl-max': { max: '1535px' },
      'xl-max': { max: '1279px' },
      'lg-max': { max: '1023px' },
      'md-max': { max: '767px' },
      'sm-max': { max: '639px' },
      '2xl': { min: '1535px' },
      xl: { min: '1279px' },
      lg: { min: '1023px' },
      md: { min: '767px' },
      sm: { min: '639px' },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
};
