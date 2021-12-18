// import colors from 'vuetify/es5/util/colors'

const basePath = process.env.BASE_PATH || '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ln',
    title: 'Hélène Cabillic - Correctrice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Correction sur mesure, confiez-moi votre projet !' },
      { name: 'format-detection', content: 'telephone=no' }
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
