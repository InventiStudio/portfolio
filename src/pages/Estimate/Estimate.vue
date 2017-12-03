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
      title() {
        return this.$t('estimate.title')
      },
      description() {
        return this.$t('estimate.desc')
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'),     route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('estimate.title'), route: this.$router.resolve(this.$routeByName('Estimate')) },
        ]
      },
    }),
  }
</script>

<style src="./Estimate.sass" lang="sass" scoped></style>
