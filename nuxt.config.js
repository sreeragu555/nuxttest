import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet',href:'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'},
      {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'}
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD6joDbmBU5hMWkqQc0nvDUddUVVodxXVM",
          authDomain: "next-976fc.firebaseapp.com",
          projectId: "next-976fc",
          storageBucket: "next-976fc.appspot.com",
          messagingSenderId: "354475797525",
          appId: "1:354475797525:web:679d326d023fd7c599721c",
          measurementId: "G-VDNWWN8E2L"
        },
        services: {
          firestore: true,
          storage:true
          }
      }
    ]
  ],
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

build: {
},
}
