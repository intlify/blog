<template>
  <div class="divide-y divide-gray-200">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ $frontmatter.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-200">
        {{ $frontmatter.subtext }}
      </p>
    </div>
    <ul class="divide-y divide-gray-200">
      <li
        v-for="{ title, href, date, excerpt } of $site.customData.posts"
        class="py-12"
      >
        <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
          <Date :date="date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a
                  class="text-gray-900 dark:text-white"
                  :href="href"
                >{{ title }}</a>
              </h2>
              <div
                v-if="excerpt"
                class="prose max-w-none text-gray-500"
                v-html="excerpt"
              />
            </div>
            <div class="text-base leading-6 font-medium">
              <a
                class="link"
                aria-label="read more"
                :href="href"
              >Read more →</a>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Date from './Date.vue' // eslint-disable-line no-unused-vars
</script>
