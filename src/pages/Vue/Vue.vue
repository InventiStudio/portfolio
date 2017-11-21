<template lang="pug">
  article.vue
    section.vue__landing.common__wave
      - var n = 0;
      while n < 20
        br
        - n++
      .vue__qualities
        - var n = 0;
        while n < 40
          br
          - n++
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

  export default {
    components: {
      HireUs,
    },
    head: head.set({
      title: () => 'Vue',
    }),
  }
</script>

<style src="./Vue.sass" lang="sass" scoped></style>
