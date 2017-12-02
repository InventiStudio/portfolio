<template lang="pug">
  article.vue
    .vue__landing.o-wave--sinus
      Landing
      .vue__qualities
        Qualities
    WhyWeChose.bg-alabaster
    .vue__inventi-and-vue
      InventiAndVue
    .vue__technologies
      Technologies
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import Qualities from './Qualities/Qualities'
  import WhyWeChose from './WhyWeChose/WhyWeChose'
  import InventiAndVue from './InventiAndVue/InventiAndVue'
  import Technologies from './Technologies/Technologies'

  export default {
    components: {
      Landing,
      Qualities,
      HireUs,
      WhyWeChose,
      InventiAndVue,
      Technologies,
    },
    head: head.set({
      title: () => 'Vue',
    }),
  }
</script>

<style src="./Vue.sass" lang="sass" scoped></style>
