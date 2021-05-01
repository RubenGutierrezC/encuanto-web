const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  purge: {
    content: [
     "./src/**/*.svelte",
    ],
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {
      colors: {
        'background': '#f6f7e9',
        'calculator': '#100303',
        'mgreen': '#33694f',
        'header': '#3c312f'
      }
    }
  },
  variants: {
    extend: {
      width: ['hover'],
      height: ['responsive', 'hover', 'focus']
    }
  },
};
