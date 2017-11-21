<template lang="jade">
  section.scroll-more.c-white-light
    Icon.scroll-more__icon(
      v-if="isMobile",
      type="icon--scroll-hand",
      @click="smoothScrollTo(target)",
      :clickable="true",
    )
    Icon.scroll-more__icon.scroll-more__icon--mouse(
      v-else="",
      type="icon--scroll-mouse",
      @click="smoothScrollTo(target)",
      :clickable="true",
    )
    small.scroll-more__text.c-white-medium(
      :class="{ 'scroll-more__text-desktop': !isMobile }",
      @click="smoothScrollTo(target)",
    ) {{ $c('_', 'SCROLL') }}
</template>

<script>
  import smoothScrollTo from 'services/scroll'

  export default {
    name: 'ScrollForMore',
    props: {
      target: {
        type: String,
        required: true,
      },
    },
    computed: {
      isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
      },
    },
    methods: {
      smoothScrollTo,
    },
  }
</script>

<style src="./ScrollForMore.sass" lang="sass" scoped></style>
