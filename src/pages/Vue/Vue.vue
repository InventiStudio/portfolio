<template lang="pug">
  article.vue
    section.vue__landing.o-wave--sinus
      Landing
      .vue__qualities
        Qualities
    section.vue__why-we-chose
      - var n = 0;
      while n < 30
        br
        - n++
    section.vue__inventi-plus-vue
      - var n = 0;
      while n < 50
        br
        - n++
    section.vue__technologies
      - var n = 0;
      while n < 35
        br
        - n++
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import Qualities from './Qualities/Qualities'

  export default {
    components: {
      Landing,
      Qualities,
      HireUs,
    },
    head: head.set({
      title: () => 'Vue',
    }),
  }
</script>

<style src="./Vue.sass" lang="sass" scoped></style>
