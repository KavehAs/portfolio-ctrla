/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'darkBlack': '#212121',
        'lightBlack': '#424242',
        'lightText': '#EEEEEE',
        'greyText': '#BDBDBD',
        'pureWhite': '#FAFAFA'
      } ,
      screens: {
        'sm': '600px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
}

