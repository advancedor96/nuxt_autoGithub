// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Auto Github",
      meta: [
        { name: "my Auto Github", content: "one click, one commit."}
      ],
      script: [{
        src: "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js",
        async: true,
      }],
      link: [{
        rel: 'stylesheet', src: "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
      }]
    }
  }

})
