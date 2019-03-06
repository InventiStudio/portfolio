<template lang="pug">
  .ct-chart-container
    .ct-chart-container__minwidth
      .ct-chart(:class="`ct-chart--${_uid}`")
      .ct-chart-legend(v-if="data.series.length > 1")
        .ct-chart-legend__serie(v-for="(serie, index) in data.series", v-if="serie.name")
          .ct-chart-legend__serie-color(:style="{ 'background-color': colors[index], 'box-shadow': `0 4px 14px -4px ${colors[index]}` }")
          .ct-chart-legend__serie-name {{ serie.name }}

</template>

<script>
  import Chartist from 'chartist'
  import ChartistTooltip from 'chartist-plugin-tooltips-updated'

  const colors = [
    '#684bc6',
    '#bd2daa',
    '#f8188e',
    '#e46d75',
    '#2ec4b6',
    '#1869e5',
  ]

  const options = {
    plugins: [ChartistTooltip({
      appendToBody: true,
    })],
    seriesBarDistance: 12,
    axisX: {
      showGrid: false,
    },
    chartPadding: {
      top: 50,
      right: 58,
      left: 30,
      bottom: 30,
    },
  }

  const rwd = [
    ['screen and (max-width: 700px)', {
      chartPadding: {
        top: 20,
        right: 15,
        left: 8,
        bottom: 15,
      },
    }],
  ]

  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },

    computed: {
      colors: () => colors,
    },

    mounted() {
      new Chartist.Bar(`.ct-chart--${this._uid}`, this.data, options, rwd) // eslint-disable-line no-new
    },
  }
</script>

<style src="chartist/dist/scss/chartist.scss" lang="scss"></style>
<style src="chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.scss" lang="scss"></style>
<style lang="sass">
  @import "~stylesheets/helpers"

  .ct-chart-container
    position: relative
    border-radius: 4px
    background-color: $c-white
    width: 100%
    box-shadow: 0 16px 48px 0 rgba($c-black, 0.05)
    display: block
    overflow-x: auto

    &::-webkit-scrollbar // sass-lint:disable-line no-vendor-prefixes
      height: 12px

    &::-webkit-scrollbar-track // sass-lint:disable-line no-vendor-prefixes
      border-radius: 0

    &::-webkit-scrollbar-thumb // sass-lint:disable-line no-vendor-prefixes
      border-radius: 0
      background-color: $c-mercury

  .ct-chart-container__minwidth
    min-width: 600px

  .ct-chart
    position: relative
    height: 400px
    max-height: 80vh
    width: 100%

  .ct-chart-legend
    text-align: center
    padding-bottom: 40px
    width: 100%

  .ct-chart-legend__serie
    display: inline-block

    &:not(:last-child)
      margin-right: 10px

  .ct-chart-legend__serie-color
    height: 16px
    width: 16px
    border-radius: 4px
    display: inline-block
    vertical-align: middle

  .ct-chart-legend__serie-name
    display: inline-block
    font-family: $ff-roboto
    font-size: 13px
    font-weight: $fw-medium
    padding: 0 10px
    color: rgba($c-black, 0.4)


  .ct-series-a
    .ct-bar
      stroke: $c-purple

  .ct-series-b
    .ct-bar
      stroke: $c-violet

  .ct-series-c
    .ct-bar
      stroke: $c-pink

  .ct-series-d
    .ct-bar
      stroke: $c-orange

  .ct-series-e
    .ct-bar
      stroke: $c-green

  .ct-series-f
    .ct-bar
      stroke: $c-blue

  .ct-grid
    stroke-dasharray: 0px
    stroke: rgba($c-mercury, 0.7)

  .ct-label
    font-family: $ff-roboto
    font-weight: $fw-medium

    &.ct-horizontal
      word-break: break-word
      margin-top: 4px
    &.ct-vertical
      margin-top: 6px

  .chartist-tooltip
    background-color: $c-bright-gray
    padding: 8px
    border-radius: 4px
    color: $c-white
    font-size: $fs-12
    font-family: $ff-roboto
    &::before
      border-width: 5px
      margin-left: -5px
      border-top-color: $c-bright-gray

    .chartist-tooltip-meta
      display: none

    br
      display: none
</style>
