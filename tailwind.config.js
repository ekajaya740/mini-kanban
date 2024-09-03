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
          text: '#EB2F96',
        },
        red: {
          border: '#FFA39E',
          bg: '#FFF1F0',
          text: '#F5222D',
        },
        volcano: {
          bg: '#FFF2E8',
          border: '#FFBB96',
          text: '#FA541C',
        },
        orange: {
          bg: '#FFF7E6',
          border: '#FFD591',
          text: '#FA8C16',
        },
        gold: {
          bg: '#FFFBE6',
          border: '#FFE58F',
          text: '#FAAD14',
        },
        lime: {
          bg: '#FCFFE6',
          border: '#EAFF8F',
          text: '#A0D911',
        },
        green: {
          bg: '#F6FFED',
          border: '#B7EB8F',
          text: '#52C41A',
        },
        cyan: {
          bg: '#E6FFFB',
          border: '#87E8DE',
          text: '#13C2C2',
        },
        blue: {
          bg: '#E6F7FF',
          border: '#91D5FF',
          text: '#1890FF',
        },
        geekblue: {
          bg: '#F0F5FF',
          border: '#ADC6FF',
          text: '#2F54EB',
        },
        purple: {
          bg: '#F9F0FF',
          border: '#D3ADF7',
          text: '#722ED1',
        },
      },
    },
  },
  plugins: [],
};
