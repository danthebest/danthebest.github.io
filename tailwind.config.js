module.exports = {
  purge: [],
  // media active dark or light mode based on system theme enable
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f4ff39',
        secondary: '#fcfcfc',
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
