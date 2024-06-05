/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0d0d0d',
        white: '#ffffff',
        green: {
          400: '#39ff14',
        },
        blue: {
          400: '#00e0ff',
          700 : '#007BFF',
        },
        red: {
          400: '#ff4d4d',
        },
        purple: {
          600: '#bf00ff',
          200 :'#BB9AF7',
        },
        gray : {
          700 : "#262626",
        },
        customYellow : '#FFE900',
        customLightGray : '#A9B1D6',
        customVlightGray : '#A9B1D6',
        lightOrange : '#d74649dc',
        limeGreen : '#32CD32',

      },
      
    },
  },
  plugins: [],
}

