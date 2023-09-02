/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      substrate: '#272E3B',
      border: '#3D4554',
      main: '#20222A',
      accent: '#F4C038',
      disabled: '#425170',
      textMain: '#ffffff',
      textSecondary: '#FFFFFF80',
      hover: '#F4C03800',
    },
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/shared/assets/home-bg.jpg')",
      },
    },
  },
  plugins: [],
};
