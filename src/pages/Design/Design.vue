<template lang="pug">
  article.design
    section.design__landing
      - var n = 0;
      while n < 60
        br
        - n++
    section.design__responsiveness
      - var n = 0;
      while n < 20
        br
        - n++
    section.design__typography
      - var n = 0;
      while n < 40
        br
        - n++
    section.design__semantics
      - var n = 0;
      while n < 20
        br
        - n++
    section.design__rhythm
      - var n = 0;
      while n < 40
        br
        - n++
    section.design__tools
      - var n = 0;
      while n < 30
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
      title: () => 'Design',
    }),
  }
</script>

<style src="./Design.sass" lang="sass" scoped></style>
