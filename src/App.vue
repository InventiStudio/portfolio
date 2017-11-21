<template lang="pug">
  #main-app
    Navbar
    transition(name="fade")
      router-view
</template>

<script>
  import Navbar from 'components/Navbar/Navbar'

  export default {
    components: {
      Navbar,
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
