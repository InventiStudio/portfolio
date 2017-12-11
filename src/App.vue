<template lang="pug">
  main
    Loader(v-show="isLoading")
    Monster
    Navbar
    Modal(v-show="openedModal")
      ContactCard(v-if="openedModal === 'contact'")
      SuccessCard(v-if="openedModal === 'success'")
    router-view
    Foot
</template>

<script>
  import Navbar from 'components/Navbar/Navbar'
  import Modal from 'components/Modal/Modal'
  import ContactCard from 'components/ContactCard/ContactCard'
  import SuccessCard from 'components/SuccessCard/SuccessCard'
  import Foot from 'components/Foot/Foot'
  import Monster from 'components/Monster/Monster'
  import Loader from 'components/Loader/Loader'
  import i18n from 'src/content'
  import eventBus from 'services/eventBus'

  export default {
    i18n,
    components: {
      Navbar,
      Modal,
      ContactCard,
      SuccessCard,
      Foot,
      Monster,
      Loader,
    },
    data() {
      return {
        isLoading: !this.$route.name,
        openedModal: '',
        estimationScope: '',
      }
    },
    watch: {
      $route(newRoute, oldRoute) {
        if (newRoute.path !== oldRoute.path) {
          setTimeout(() => window.scrollTo(0, 0), 300)
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
      eventBus.$on('set-estimation-scope', (estimationScope) => {
        this.estimationScope = estimationScope
      })
      eventBus.$on('reset-estimation-scope', () => {
        this.estimationScope = ''
      })
      eventBus.$on('stop-root-loader', () => {
        this.isLoading = false
      })
    },
  }
</script>

<style src="stylesheets/application.sass" lang="sass"></style>
