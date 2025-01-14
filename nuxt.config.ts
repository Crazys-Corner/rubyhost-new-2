// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: [
      "gsap"
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon',  "nuxt3-lenis", "@hypernym/nuxt-gsap"],
})