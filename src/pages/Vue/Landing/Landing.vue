<template lang="pug">
  .landing
    .row.column.text-center
      icon.c-white-80.mb-32.medium-mb-40(type="icon--monitor")
      p.fs-11.c-white-60.mb-16.medium-mb-8 {{ $t('vue.tags') }}
      h1.o-heading-1.c-white {{ $t('vue.title') }}
      p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40.max-w-560 {{ $t('vue.desc') }}
      router-link.o-btn.o-btn--navy.mr-8(
        :to="{ name: 'Estimate' }",
        @click.native="setEstimationScope('front-end')",
      )
        span.c-white.fs-16 {{ $t('vue.ctaEstimate') }}
      button(type="button", @click="openContactModal()").o-link.c-white.mt-16.mb-16 {{ $t('common.orContactUs') }}
</template>

<script>
  import { openContactModal, setEstimationScope } from 'services/events'

  export default {
    methods: {
      openContactModal,
      setEstimationScope,
    },
  }
</script>

<style src="./Landing.sass" lang="sass" scoped></style>
