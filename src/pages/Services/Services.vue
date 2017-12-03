<template lang="pug">
  article
    Landing
    WhatWeDo
    WeAreFlexible
    HireUs
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import WhatWeDo from './WhatWeDo/WhatWeDo'
  import WeAreFlexible from './WeAreFlexible/WeAreFlexible'

  export default {
    components: {
      HireUs,
      Landing,
      WhatWeDo,
      WeAreFlexible,
    },
    head: head.set({
      title() {
        return this.$t('services.title')
      },
      description() {
        return this.$t('services.desc')
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'),     route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('services.title'), route: this.$router.resolve(this.$routeByName('Services')) },
        ]
      },
    }),
  }
</script>
