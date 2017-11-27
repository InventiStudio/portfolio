<template lang="pug">
  article.home
    section.home__landing.common__wave
      p {{ $t('home.title') }}
      - var n = 0;
      while n < 60
        br
        - n++
    section.home__testimonials
      - var n = 0;
      while n < 40
        br
        - n++
    section.home__contact
      img.home__map(src="~assets/images/Home/contact__map.svg")
      - var n = 0;
      while n < 40
        br
        - n++
</template>

<script>
  import head from 'src/head'

  export default {
    head: head.set({
      title() { return this.$t('home.title') },
    }),
  }
</script>

<style src="./Home.sass" lang="sass" scoped></style>
