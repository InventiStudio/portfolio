<template lang="pug">
  #main-app
    Navbar
    transition(name="fade")
      router-view
    img(src="~src/assets/images/img.jpg", alt="")
</template>

<script>
  import store from 'src/store'

  export default {
    store,
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
