import { getIconCollections } from '@egoist/tailwindcss-icons'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    '@nuxt/ui',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  ui: { 
    icons: {
      collections: {
        ...getIconCollections(['ic']),
      },
    },
  }
})
