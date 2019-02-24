<template lang="pug">
  main
    Landing
    Survey
</template>

<script>
  import head from 'src/head'
  import { resetEstimationScope } from 'services/events'
  import Landing from './Landing/Landing'
  import Survey from './Survey/Survey'

  export default {
    components: {
      Landing,
      Survey,
    },
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
    beforeDestroy() {
      resetEstimationScope()
    },
  }
</script>
