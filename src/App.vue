<template lang="pug">
  #main-app
    Navbar
    transition(name="fade")
      router-view
    Foot
</template>

<script>
  import Navbar from 'components/Navbar/Navbar'
  import Foot from 'components/Foot/Foot'

  export default {
    components: {
      Navbar,
      Foot,
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
