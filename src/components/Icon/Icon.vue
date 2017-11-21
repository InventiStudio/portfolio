<template lang="pug">
  svg.icon(:class="{ 'u-pointer': isPointer }", @click="onClick")
    use(:xlink:href="href")
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      type: {
        type: String,
        required: true,
      },
      isPointer: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      href() {
        return `#${this.type}`
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
      },
    },
  }
</script>

<style src="./Icon.sass" lang="sass"></style>
