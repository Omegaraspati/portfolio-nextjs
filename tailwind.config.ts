/** @type {import('tailwindcss').Config} */
module.exports = {
  content : [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme : {
    extend: {
      colors: {
        green :{
          50: '#30AF58',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#787878',
          50: '#585858',
          90: '#141414',
        },
      },
    backgroundImage : {
      pattern: "url('/pattern.png')"
    },
    screen: {
      xs: '400px',
      '3x1': '1680px',
      '4x1': '2200px',
    },
    maxWidth: {
      '10x1': '1512px',
    },
    borderRadius: {
      '5x1': '40px',
    }
    },
  },
  plugins: [],
};