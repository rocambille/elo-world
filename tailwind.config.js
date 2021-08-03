module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 0 .25rem 0 gray',
      b: '0 .25rem .25rem -.25rem gray',
      t: '0 -.25rem .25rem -.25rem gray',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(36rem, 1fr))',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
};
