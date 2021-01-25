'use strict'

module.exports = {
  root: true,
  globals: {},
  env: {
    node: true
  },
  extends: [
    'plugin:vue-libs/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'object-curly-spacing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off'
  }
}
