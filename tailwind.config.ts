import { default as typography } from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./*.md', './posts/*.md', './.vitepress/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: 'class',
  theme: {
    fontFamily: {
      intlify: ['"copperplate, serif"']
    },
    extend: {}
  },
  plugins: [typography()]
}

export default config
