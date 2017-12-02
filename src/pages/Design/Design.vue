<template lang="pug">
  article.design
    section.design__landing
      Landing
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
      Tools
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import Tools from './Tools/Tools'

  export default {
    components: {
      Landing,
      Tools,
      HireUs,
    },
    head: head.set({
      title: () => 'Design',
    }),
  }
</script>

<style src="./Design.sass" lang="sass" scoped></style>
