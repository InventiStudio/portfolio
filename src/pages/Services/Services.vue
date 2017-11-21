<template lang="pug">
  article.services
    section.services__landing.common__wave
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
      while n < 30
        br
        - n++
</template>

<script>
  import head from 'src/head'

  export default {
    head: head.set({
      title: () => 'Services',
    }),
  }
</script>

<style src="./Services.sass" lang="sass" scoped></style>
