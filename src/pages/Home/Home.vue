<template lang="pug">
  article
    Landing
    Testimonials(:id="constants.sectionIds.home.testimonials")
    Contact(:id="constants.sectionIds.home.contact")
</template>

<script>
  import smoothScrollTo from 'services/scroll'
  import constants from 'src/constants'
  import head from 'src/head'
  import Landing from './Landing/Landing'
  import Testimonials from './Testimonials/Testimonials'
  import Contact from './Contact/Contact'

  export default {
    head: head.set({
      title() { return '' },
      breadcrumb() {
        return [
          { name: this.$t('home.title'), route: this.$router.resolve(this.$routeByName('Home')) },
        ]
      },
    }),
    components: {
      Landing,
      Testimonials,
      Contact,
    },
    computed: {
      constants: () => constants,
    },
    mounted() {
      if (this.$route.hash) {
        smoothScrollTo(this.constants.sectionIds.home[this.$route.hash.replace('#', '')])
      }
    },
  }
</script>

<style src="./Home.sass" lang="sass" scoped></style>
