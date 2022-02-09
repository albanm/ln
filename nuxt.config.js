// import colors from 'vuetify/es5/util/colors'

const basePath = process.env.BASE_PATH || '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head () {
    const head = {
      titleTemplate: 'Hélène Cabillic - %s',
      title: 'Correctrice',
      htmlAttrs: {},
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
        { name: 'thumbnail', content: 'https://helenecabillic.fr/profile.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }

    if (this.$nuxtI18nHead) {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      head.htmlAttrs = { ...head.htmlAttrs, ...i18nHead.htmlAttrs }
      head.meta = [...head.meta, ...i18nHead.meta]
      head.link = [...head.link, ...i18nHead.link]
    }

    return head
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

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],

  i18n: {
    locales: [{ code: 'fr', iso: 'fr-FR' }, { code: 'en', iso: 'en-EN' }],
    defaultLocale: 'fr',
    vueI18nLoader: true,
    // disabled because redirections are not great for google indexing
    detectBrowserLanguage: false,
    baseUrl: 'https://helenecabillic.fr',
    vueI18n: {
      fallbackLocale: 'fr'
    }
  },

  sitemap: {
    filter ({ routes }) {
      return routes.filter((route) => {
        if (route.path.endsWith('-image')) { return false }
        if (route.path.endsWith('cgv')) { return false }
        if (route.path === '/en/mentions-legales') { return false }
        return true
      })
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
