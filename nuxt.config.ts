export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/devtools'
  ],
})
