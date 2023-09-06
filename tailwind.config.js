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
      error: '#FF4510',
      rare: '#275CE4',
      mythical: '#8533ED',
      classified: '#CF309C',
      covert: '#ED422B',
    },
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/shared/assets/home-bg.jpg')",
      },
      boxShadow: {
        outline: '0px 0px 0px 3px rgba(244, 192, 56, 1)',
        rare: '0px 0px 20px 8px #275CE4',
        mythical: '0px 0px 20px 8px #8533ED',
        classified: '0px 0px 20px 8px #CF309C',
        covert: '0px 0px 20px 8px #ED422B',
        accent: '0px 0px 20px 8px #F4C038',
      },
    },
  },
  plugins: [],
};
