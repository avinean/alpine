import { getIconCollections } from '@egoist/tailwindcss-icons'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    '@nuxt/ui',
    '@nuxt/devtools',
  ],
  ui: { 
    icons: {
      collections: {
        ...getIconCollections(['ic']),
      },
    },
  }
})
