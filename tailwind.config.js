module.exports = {
  purge: [
    './index.md',
    './README.md',
    './posts/*.md',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      intlify: ['"copperplate, serif"']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
