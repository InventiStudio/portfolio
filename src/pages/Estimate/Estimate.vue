<template lang="pug">
  article.estimate
    section.estimate__landing
      - var n = 0;
      while n < 30
        br
        - n++
    section.estimate__form
      - var n = 0;
      while n < 100
        br
        - n++
</template>

<script>
  import head from 'src/head'

  export default {
    head: head.set({
      title: () => 'Estimate',
    }),
  }
</script>

<style src="./Estimate.sass" lang="sass" scoped></style>
