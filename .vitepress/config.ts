import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.ts'

import type { HeadConfig } from 'vitepress'

const head: HeadConfig[] = [
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@intlify' }],
  ['meta', { name: 'twitter:url', content: 'https://blog.intlify.dev' }],
  ['meta', { name: 'twitter:title', content: 'The Intlify World' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content: 'The Borderless Internationalization'
    }
  ],
  [
    'meta',
    {
      name: 'twitter:image',
      content: 'https://blog.intlify.dev/ogimage.png'
    }
  ],
  ['meta', { property: 'og:type', content: 'article' }],
  ['meta', { property: 'og:url', content: 'https://blog.intlify.dev' }],
  ['meta', { property: 'og:site_name', content: 'The Intlify World' }],
  ['meta', { property: 'og:title', content: 'The Intlify World' }],
  [
    'meta',
    {
      property: 'og:description',
      content: 'The Borderless Internationalization'
    }
  ],
  [
    'meta',
    {
      property: 'og:image',
      content: 'https://blog.intlify.dev/ogimage.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
]

if (process.env.NODE_ENV === 'production') {
  head.push([
    'script',
    {
      src: 'https://unpkg.com/thesemetrics@latest',
      async: ''
    }
  ])
}

export default defineConfig({
  // appearance: 'force-dark',
  srcExclude: ['**/README.md'],
  title: 'The Intlify World',
  description: 'The offical blog for the Intlify project',
  head,
  cleanUrls: true,
  buildEnd: genFeed
})
