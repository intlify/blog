// @ts-check
const { getPosts } = require('./getPosts')

/**
 * @type {import('vitepress').UserConfig['head']}
 */
const head = [
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
      content: 'https://blog.intlify.dev/images/ogimage.png'
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
      content: 'https://blog.intlify.dev/images/ogimage.png'
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

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'The Intlify World',
  description: 'The offical blog for the Intlify project',
  head,
  customData: {
    posts: getPosts()
  }
}
