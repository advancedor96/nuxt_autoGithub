import GitHubCalendar from 'github-calendar'
import 'github-calendar/dist/github-calendar-responsive.css';


export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(GitHubCalendar);

  // nuxtApp.provide('githubCalendar', GitHubCalendar);
})