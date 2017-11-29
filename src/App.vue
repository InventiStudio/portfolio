<template lang="pug">
  main
    Monster
    Navbar
    router-view
    Foot
</template>

<script>
  import Navbar from 'components/Navbar/Navbar'
  import Foot from 'components/Foot/Foot'
  import Monster from 'components/Monster/Monster'
  import i18n from 'src/content'

  export default {
    i18n,
    components: {
      Navbar,
      Foot,
      Monster,
    },
    watch: {
      $route(newRoute, oldRoute) {
        if (newRoute.path !== oldRoute.path) {
          window.scrollTo(0, 0)
        }
      },
    },
  }
</script>

<style src="stylesheets/application.sass" lang="sass"></style>
