<template lang="pug">
  article.homepage
    section.homepage__landing.common__wave
      - var n = 0;
      while n < 60
        br
        - n++
    section.homepage__testimonials
      - var n = 0;
      while n < 40
        br
        - n++
    section.homepage__contact
      - var n = 0;
      while n < 30
        br
        - n++
</template>

<script>
  import head from 'src/head'

  export default {
    head: head.set({
      title: () => 'Home',
    }),
  }
</script>

<style src="./Homepage.sass" lang="sass" scoped></style>
