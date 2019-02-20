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
      var options = {
        seriesBarDistance: 30
      };

      // var responsiveOptions = [
      //   ['screen and (max-width: 640px)', {
      //     seriesBarDistance: 5,
      //     axisX: {
      //       labelInterpolationFnc: function (value) {
      //         return value[0];
      //       }
      //     }
      //   }]
      // ];

      new Chartist.Bar('.ct-chart', this.data, options);
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
