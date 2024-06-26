/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'navShadow': '0 5px 5px rgb(0 0 0 / 0.1)'
    },
    colors: {
        wfGreenDark: '#0A6E14',
        wfGreenMed: '#52A413',
        wfGreenLight: '#6EC014',
        gradientLightGreen: '#57A41A',
        gradientDarkGreen: '#237A20',
        gray777: '#777777',
        gray666: '#666666',
        grayLight: '#E3E2D9',
        grayLightHover: '#DADACD',
        grayText: '#727F83',
        kaki: '#999966',
        redDark: '#B20000',
    },
    container: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px'
        }
    },
    fontFamily: {
        body: ['Verdana']
    }
    },
  },
  plugins: [],
}

