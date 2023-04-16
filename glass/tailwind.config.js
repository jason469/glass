/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e7dbd8',
          200: '#caafa8',
        },
        secondary: {
          100: '#ccdce0',
          200: '#A8C3CA',
          300: '#8db1ba',
        },
        navyBlue: {
          200: '#487095',
          300: '#324d67'
        }
      },
      fontFamily: {
        body: ['Nunito'],
        logo: ['Playfair Display']
      }
    },
  },
  plugins: [],
}

