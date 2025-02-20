export default defineNuxtConfig({
  app: {
    head: {
      title: 'Haven of Flavours - Haven',
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
        }
      ],
      script: [
        {
          src: 'https://unpkg.com/scrollreveal',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          defer: true
        }
      ]
    }
  },

  css: ['~/assets/css/styles.css'],

  modules: [
    '@nuxt/image'
  ],

  compatibilityDate: '2025-02-19'
})