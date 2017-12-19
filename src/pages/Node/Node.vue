<template lang="pug">
  div
    .node__landing.o-wave--sinus
      Landing
      .node__qualities
        Qualities
    .node__why-we-chose
      WhyWeChose
    .node__inventi-plus-node
      InventiAndNode
    .node__technologies
      Technologies
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import Qualities from './Qualities/Qualities'
  import WhyWeChose from './WhyWeChose/WhyWeChose'
  import InventiAndNode from './InventiAndNode/InventiAndNode'
  import Technologies from './Technologies/Technologies'

  export default {
    components: {
      Landing,
      Qualities,
      HireUs,
      WhyWeChose,
      InventiAndNode,
      Technologies,
    },
    head: head.set({
      title() {
        return this.$t('node.title')
      },
      description() {
        return this.$t('node.desc')
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'),     route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('services.title'), route: this.$router.resolve(this.$routeByName('Services')) },
          { name: this.$t('node.title'),     route: this.$router.resolve(this.$routeByName('Node')) },
        ]
      },
    }),
  }
</script>

<style src="./Node.sass" lang="sass" scoped></style>
