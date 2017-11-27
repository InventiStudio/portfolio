<template lang="pug">
  article
    Landing
    Testimonials
    Contact
</template>

<script>
  import head from 'src/head'
  import Landing from './Landing/Landing'
  import Testimonials from './Testimonials/Testimonials'
  import Contact from './Contact/Contact'

  export default {
    head: head.set({
      title() { return this.$t('home.title') },
    }),
    components: {
      Landing,
      Testimonials,
      Contact,
    },
  }
</script>

<style src="./Home.sass" lang="sass" scoped></style>
