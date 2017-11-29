<template lang="pug">
  article.node
    section.node__landing.o-wave--sinus
      - var n = 0;
      while n < 20
        br
        - n++
      .node__qualities
        - var n = 0;
        while n < 40
          br
          - n++
    section.node__why-we-chose
      - var n = 0;
      while n < 30
        br
        - n++
    section.node__inventi-plus-node
      - var n = 0;
      while n < 50
        br
        - n++
    section.node__technologies
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
      title: () => 'Node',
    }),
  }
</script>

<style src="./Node.sass" lang="sass" scoped></style>
