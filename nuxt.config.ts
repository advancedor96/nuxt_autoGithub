// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/github-calendar.client.js', mode: 'client' }
  ],
  app: {
    head: {
      title: "Auto Github",
      meta: [
        { name: "my Auto Github", content: "one click, one commit."}
      ],

    }
  }

})
