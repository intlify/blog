// @ts-check
const { getPosts } = require('./getPosts')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'The Intlify World',
  description: 'The offical blog for the Intlify project',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  customData: {
    posts: getPosts()
  }
}
