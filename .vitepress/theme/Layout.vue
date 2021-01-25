<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a
          class="text-xl"
          href="/"
          aria-label="The Intlify World"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            width="36px"
            class="inline-block mr-2 fill-current dark:text-white"
          >
            <g>
              <path
                fill="none"
                d="M0 0h640v640H0z"
              />
              <path d="M424.7 72.8L44.9 267.6 347.7 207l100.6 196.2L563.8 344 424.7 72.8z" />
              <path
                d="M445.7 570.3L141.3 311.4l422.5 146.3z"
                fill="#ffad33"
              />
            </g>
          </svg>
          <span
            v-if="!isIndex"
            class="hidden md:inline dark:text-white"
          >The Intlify World</span>
        </a>
        <div class="text-base text-gray-500 dark:text-gray-200 leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-500 mr-4"
            href="/feed.rss"
          >RSS Feed</a>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-500"
            href="https://intlify.dev"
            target="_blank"
            rel="noopener"
          >intlify.dev→</a>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import DarkModeToggle from './DarkModeToggle.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
/* eslint-enable no-unused-vars */
</script>
