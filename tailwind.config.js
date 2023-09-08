/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppin: [`'Poppins', sans-serif;`]
      },
      colors: {
        'primary-color': '#FB3D15',
        'secondary-color':'#ffa72b',
        'grey-color':'#7C7C7C',
      },
      height: {
        '35': '35px',
      },
      width: {
        '300': '300px', 
      },
      fontSize: {
        '14': '14px',
      },
    },
  },
  plugins: [],
}