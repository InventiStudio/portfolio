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
      img.homepage__map(src="~assets/images/Homepage/contact__map.svg")
      - var n = 0;
      while n < 40
        br
        - n++
</template>

<script>
  import head from 'src/head'

  export default {
    head: head.set({
      title() { return this.$t('pages.Homepage.title') },
    }),
  }
</script>

<style src="./Homepage.sass" lang="sass" scoped></style>
