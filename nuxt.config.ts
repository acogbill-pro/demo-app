import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  head: {
		titleTemplate: '%s', // - ' + process.env.npm_package_name,
		title: 'demo app', //process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'main',
				name: 'demo app',
				content:
					'Demo app for Segment', //process.env.npm_package_description || '',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Fira+Sans:700%7CMerriweather&display=swap',
			},
		],
	},
	css: ['vuetify/lib/styles/main.sass','mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  buildModules: [
    // pinia plugin
    '@pinia/nuxt',
  ],
  vuetify: {
		customVariables: ['~/assets/variables.scss'],
	}
})
