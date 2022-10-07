import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/main.css','mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  buildModules: [
    // pinia plugin
    '@pinia/nuxt',
  ],
})
