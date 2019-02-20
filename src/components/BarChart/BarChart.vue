<template lang="pug">
  div.ct-chart(:style="{ height: '300px' }")
</template>

<script>
  import Chartist from 'chartist'

  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },

    mounted() {
      const options = {
        seriesBarDistance: 30,
      }

      new Chartist.Bar('.ct-chart', this.data, options) // eslint-disable-line no-new
    },
  }
</script>

<style src="chartist/dist/scss/chartist.scss" lang="scss"></style>
<style lang="sass">
  .ct-series-a
    .ct-bar
      stroke: #7e47f4

  .ct-series-b
    .ct-bar
      stroke: #ea4783

  .ct-bar
    stroke-width: 30px
</style>
