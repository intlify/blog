import fs from 'node:fs'
import path from 'node:path'
import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'

import type { SiteConfig } from 'vitepress'

const baseUrl = `https://blog.intlify.dev`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'The Intlify World',
    description: 'The offical blog for the Intlify project',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
      'Copyright (c) 2021-present, Kazuya Kawaguchi and blog contributors'
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://x.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: frontmatter.date
    })
  }

  fs.writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
