---
title: Announcing Vue I18n 9.0
date: 2021-02-27
author: Kazuya Kawaguchi
gravatar: 38bee248082f6071230de65e9d74a944
twitter: "@kazu_pon"
---

<p align="center">
  <img width="480px" src="/spiral-staircase.jpg">
</p>


Today, we are proud to announce the official release of Vue I18n 9.0.

Vue I18n 9.0 started on Jan 6, 2020 and lasted for more than a year, **from full scratch, over 600 commits, 9 related tools development** and library.

We would like to express our deepest gratitude towards our Intlify team members, contributors, **our sponsors and bakers**, and my company **[PLAID, Inc](https://plaid.co.jp/company.html)** for contributing and supporting.

---

## Re-designed from scratch

In Vue I18n v9, we re-designed and re-built it completely from scratch.

The new major version of Vue I18n provides [Layered modules](#layered-modules), [Hybrid APIs](#hybird-apis), [Message Compiler](#message-compiler), [Pre-compilation](#pre-compilation), [Vue Devtools integration](#vue-devtools-integration), [Bundle size optimization](#bundle-size-optimization), and a solid foundation for long-term future iterations of this library.

### Layered modules

It's structured as a module with the following three layers:

- Utility Layer
- Core Layer
- Entry Layer

<p align="center">
  <img src="/layered-module.png">
</p>

The modules divided into these layers are managed by [monorepo packages](https://github.com/intlify/vue-i18n-next/tree/master/packages).

We made it easier to maintain and extend by modularizing the system by responsibilities and features.

It also provides not only the Vue I18n API but also a low-level API:

- [@intlify/core-base](https://github.com/intlify/vue-i18n-next/tree/master/packages/core-base): Low-level i18n API
- [@intlify/message-compiler](https://github.com/intlify/vue-i18n-next/tree/master/packages/message-compiler): Compiler API

### Hybrid APIs

Vue I18n v9 takes a hybrid approach as it provides an i18n API for Vue.js.

The following two APIs are provided:

- Composition API: Optimized for Vue 3 Composition API
- Legacy API: Mostly compatible with Vue I18n v8.x

Legacy API will support existing Vue applications using Vue I18n to migrate smoothly to Vue 3.

These APIs are implemented based on Low-Level i18n API. Specifically, Vue I18n Composition API is implemented by Low-Level i18n API, and Legacy API is implemented by wrapping Vue I18n Composition API.

<p align="center">
  <img width="196px" src="/hybrid-api-stack.png">
</p>

Here is an introduction to [Vue I18n Composition API](https://vue-i18n.intlify.dev/guide/advanced/composition.html). Also refer to the [API Reference](https://vue-i18n.intlify.dev/api/general.html) for more details.

### Message Compiler

We’ve just created Message Compiler for future extensions to the Message format syntax.

Message Compiler compiles the message format syntax for Vue I18n. It generates Message functions that can be executed as JavaScript. It also has improved DX by allowing reporting of message syntax errors and support for source maps.

<p align="center">
  <img src="/compile-process.png">
</p>

Message Compiler compiles the Message, and it generates Message functions that can be executed as JavaScript.

Message Compiler has improved DX by allowing reporting of message syntax errors and support for source maps.

### Pre-Compilation

Vue I18n v9 supports the pre-compilation of locale messages using bundler middleware, which is provided as the official tooling.

With pre-compiling, you can save the execution cost from the compilation process. As the result, your Vue application rendering performance can be improved significantly.

<p align="center">
  <img src="/pre-compilation.png">
</p>

### Vue DevTools Integration

In the development build, Vue I18n can integrate with Vue DevTools using the Vue DevTools API. 

It extended the following Vue DevTools:

- Extend Component inspector
- Add i18n resources inspector
- Add custom timeline

<p align="center">
  <img src="/vue-devtools-component-inspector.png">
</p>

You can debug Vue I18n on Vue DevTools, which is added some enhancements.

### Bundle Size Optimization

Vue I18n v9 also provides the mechanism for bundle size optimization.
Bundle builds for ES module are configured as default `vue-i18n.esm-bundler.js` which bundled with runtime and Message Compiler at the `module` field of the `package.json`.

The following reasons:

- Define Locale messages as objects directly in your JavaScript code.
- Fetch locale messages from the back-end API.

If these cases don't become applicable, you can use the officially provided bundler + bundle middleware to pre-compile the locale message.
So you can set runtime only as an alias in each bundler to reduce its bundle size.

Vue I18n v9 also provides another way to reduce the bundle size by using the Feature flag.

The build file size can be tree-shaken by up to **20%** maximum with all these optimization mechanisms.

Read the [documentation](https://vue-i18n.intlify.dev/guide/advanced/optimization.html) for more details.

### New Toolings

We support i18n DX with your Vue i18n by providing the following new tools:

- [`@intlify/vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n): Vite plugin for Vue I18n
- [`@intlify/cli`](https://github.com/intlify/cli): CLI Tooling for i18n development

---

## Migration from Vue I18n v8.x

We've tried to maintain compatibility with Vue I18n v8.x by providing the Legacy API. But as it's a major version release, it has some breaking changes.

You can check the full migration guide on the [documentation](https://vue-i18n.intlify.dev/guide/migration/breaking.html).

---

## Let's Try It!

If you want to give Vue I18n 9 a quick try, you can check the [CodeSandbox](https://codesandbox.io/s/vue-i18n-9-template-h28c0), the [Vite template optimized for Composition API](https://github.com/intlify/vite-vue-i18n-starter), or [use the CLI](https://cli.vuejs.org/) to get started.

---

## The future of i18n

### Next milestone

In the near next milestone **beetle** (Vue i18n v9 milestone is **spiral staircase**), we will have a plan to the below:

- Message syntax enhancement
- Main packages and official toolings improvement
- Vue I18n v9 IE 11 Compatible build
- Vue I18n CodeMod
- Move `kazupon/vue-i18n` to intlify organization

About details of milestone, see [**beetle**](https://github.com/orgs/intlify/projects/1) milestone.

The major support in this milestone is the enhancement of message format syntax.

Vue I18n message format syntax was an original format, but the original format makes it difficult to use for those already familiar with ICU message format.
In particular, since there is no selector, the current Vue I18n requires defining messages with pipeline characters to support plurals.
Also, since number format and datetime format are not supported, Vue I18n have to use the API to format them.

We plan to extend this to an ICU-like message format syntax. It means that it will be designed to simplify Vue I18n API.

### About Intlify

Since the beginning of vue-i18n-next development or even before, we have been developing official i18n related tools such as vue-i18n-loader on intlify organization.

The following is mission:

*"Intlify is a project that aims to improve Developer Experience in software internationalization. We will aim to improve the Developer Experience of internationalization by providing libraries, frameworks, and tools that break down barriers to internationalization".*

[Intlify](https://intlify.dev/) is a project that I organize.

Since I started working as a software engineer, I have been involved in developing software supporting i18n, including enterprise applications, mobile app applications such as iOS, and web applications.
I've become aware that even though technology has evolved, but DX has not changed over time.

So, I decided to organize the intlify project because I wanted to solve this problem not only for Vue.js but also for software in general.

Vue I18n will continue to be a part of Intlify project. Solving i18n problems through Vue I18n and continuing our Vue ecosystem involvement.

As Vue I18n grows, we are looking for more Intlify project members.
If you're interested in Intlify, don't hesitate to conact me!

---

## Supporting Vue I18n & Intlify

If your company uses Vue I18n or Intlify packages, please consider supporting its development by [sponsoring me](https://github.com/sponsors/kazupon) 🙏.
It means a lot and really helps me keep working on improving the Vue Ecosystem and i18n related DX.
