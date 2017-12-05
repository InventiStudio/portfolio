<template lang="pug">
  main
    Monster
    Navbar
    Modal(v-show="openedModal")
      ContactCard(v-if="openedModal === 'contact'")
    router-view
    Foot
</template>

<script>
  import Navbar from 'components/Navbar/Navbar'
  import Modal from 'components/Modal/Modal'
  import ContactCard from 'components/ContactCard/ContactCard'
  import Foot from 'components/Foot/Foot'
  import Monster from 'components/Monster/Monster'
  import i18n from 'src/content'
  import eventBus from 'services/eventBus'

  export default {
    i18n,
    components: {
      Navbar,
      Modal,
      ContactCard,
      Foot,
      Monster,
    },
    data() {
      return {
        openedModal: '',
      }
    },
    watch: {
      $route(newRoute, oldRoute) {
        if (newRoute.path !== oldRoute.path) {
          window.scrollTo(0, 0)
        }
      },
    },
    mounted() {
      eventBus.$on('open-modal', (modalName) => {
        this.openedModal = modalName
        document.body.classList.add('overflow-hidden')
      })
      eventBus.$on('close-modal', () => {
        this.openedModal = ''
        document.body.classList.remove('overflow-hidden')
      })
    },
  }
</script>

<style src="stylesheets/application.sass" lang="sass"></style>
