// import colors from 'vuetify/es5/util/colors'

const basePath = process.env.BASE_PATH || '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Hélène Cabillic - %s',
    title: 'Correctrice',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Correction sur mesure, confiez-moi votre projet !' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'Hélène Cabillic - Correctrice' },
      { name: 'og:description', content: 'Correction sur mesure, confiez-moi votre projet !' },
      { name: 'og:type', content: 'profile' },
      { name: 'og:url', content: 'https://helenecabillic.fr' },
      { name: 'og:image', content: 'https://helenecabillic.fr/profile.png' },
      { name: 'thumbnail', content: 'https://helenecabillic.fr/profile.png' },
      { name: 'og:locale', content: 'fr_FR' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    vueI18nLoader: true
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#344577', // dark blue
          secondary: '#FBA871' // light orange
        }
      }
    },
    treeShake: true,
    defaultAssets: {
      font: {
        // family: 'Merriweather'
        family: 'Nunito'
      },
      icons: 'mdi'
    }
  },

  router: {
    base: basePath
  },

  env: {
    basePath
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
