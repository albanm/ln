// import colors from 'vuetify/es5/util/colors'

const basePath = process.env.BASE_PATH || '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      titleTemplate: 'Hélène Cabillic - %s',
      title: 'Correctrice',
      htmlAttrs: {
        ...i18nHead.htmlAttrs
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
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [{ code: 'fr', iso: 'fr-FR' }, { code: 'en', iso: 'en-EN' }],
    defaultLocale: 'fr',
    vueI18nLoader: true,
    detectBrowserLanguage: {
      ballbackLocale: 'fr'
    },
    baseUrl: 'https://helenecabillic.fr',
    vueI18n: {
      fallbackLocale: 'fr'
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-fonts', { download: true, display: 'swap', families: { Nunito: [100, 300, 400, 500, 700, 900] } }]
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
    defaultAssets: false
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
