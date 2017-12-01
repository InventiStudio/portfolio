<template lang="pug">
  article.vue
    .vue__landing.o-wave--sinus
      Landing
      .vue__qualities
        Qualities
    .vue__why-we-chose
      WhyWeChose
    .vue__inventi-plus-vue
      InventiAndVue
    .vue__technologies
      - var n = 0;
      while n < 35
        br
        - n++
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import Qualities from './Qualities/Qualities'
  import WhyWeChose from './WhyWeChose/WhyWeChose'
  import InventiAndVue from './InventiAndVue/InventiAndVue'

  export default {
    components: {
      Landing,
      Qualities,
      HireUs,
      WhyWeChose,
      InventiAndVue,
    },
    head: head.set({
      title: () => 'Vue',
    }),
  }
</script>

<style src="./Vue.sass" lang="sass" scoped></style>
