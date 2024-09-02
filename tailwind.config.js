/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        success: '#27AE60',
        error: '#EB5757',
        magenta: {
          border: '#FFADD2',
          bg: '#FFF0F6',
        },
        red: {
          border: '#FFA39E',
          bg: '#FFF1F0',
        },
        volcano: {
          bg: '#FFBB96',
          border: '#FFBB96',
        },
        orange: {
          bg: '#FFF7E6',
          border: '#FFD591',
        },
        gold: {
          bg: '#FFFBE6',
          border: '#FFE58F',
        },
        lime: {
          bg: '#FCFFE6',
          border: '#EAFF8F',
        },
        green: {
          bg: '#F6FFED',
          border: '#B7EB8F',
        },
        cyan: {
          bg: '#E6FFFB',
          border: '#87E8DE',
        },
        blue: {
          bg: '#E6F7FF',
          border: '#91D5FF',
        },
        geekblue: {
          bg: '#F0F5FF',
          border: '#ADC6FF',
        },
        purple: {
          bg: '#F9F0FF',
          border: '#D3ADF7',
        },
      },
    },
  },
  plugins: [],
};
