// https://nuxt.com/docs/api/configuration/nuxt-config
import Tailwind from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-02-19',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxtjs/robots',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],
  svgo: {
    autoImportPath: '~/assets/logos',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [Tailwind()],
  },
  runtimeConfig: {
    NUXT_EMAIL_USER: '',
    NUXT_APP_PASSWORD: '',
    NUXT_EMAIL_RECIPIENT: '',
  },
});
