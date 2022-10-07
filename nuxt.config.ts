import { defineNuxtConfig } from 'nuxt'

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
