<template lang="pug">
  article.services
    section.services__landing.o-wave
      - var n = 0;
      while n < 30
        br
        - n++
    section.services__what-we-do
      - var n = 0;
      while n < 30
        br
        - n++
    section.services__flexible
      - var n = 0;
      while n < 40
        br
        - n++
    section.services__hire-us: HireUs
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'

  export default {
    components: {
      HireUs,
    },
    head: head.set({
      title: () => 'Services',
    }),
  }
</script>

<style src="./Services.sass" lang="sass" scoped></style>
