<template lang="pug">
  ul.list-reset.text-center
    li.blog-color(v-for="color in colors")
      .blog-color__circle(
        :style="{ backgroundColor: color.hex }",
      )
      span.fs-16.blog-color__text.blog-color__text--name {{ color.name }}
      span.fs-16.blog-color__text.blog-color__text--hex {{ color.hex }}
</template>

<script>
  export default {
    props: {
      colors: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style src="./BlogColorPalette.sass" lang="sass" scoped></style>
