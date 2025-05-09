/** @type {import('tailwindcss').Config} */

import defaultColors from 'tailwindcss/colors';

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...defaultColors,
      peach: '#f1bf98',
      bGreen: '#e1f4cb',
      bRed: '#5a2328',
      bBlue: '#5c80bc',
      darkBlue: '#022f40',
      sBlue: '#0D324D',
      bWhite: '#f7f0f5',
    },
    extend: {
      fontFamily: {
        tomorrow: ['Tomorrow', 'Poppins'],
      },
    },
  },
  plugins: [],
};
