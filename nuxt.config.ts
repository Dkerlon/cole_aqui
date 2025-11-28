export default defineNuxtConfig({
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  ssr: true,
  nitro: {
    preset: "vercel"
  }
})
