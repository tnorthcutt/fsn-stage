module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '876px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  extend: {},
  },
  variants: {},
  plugins: [],
};