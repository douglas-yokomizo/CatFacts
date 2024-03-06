export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
