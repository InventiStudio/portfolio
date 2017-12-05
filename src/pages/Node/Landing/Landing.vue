<template lang="pug">
  .landing.text-center
    .landing__content.row.align-center
      .landing__title.column.small-12
        icon.c-white-80.mb-40(type="icon--server")
        p.fs-11.c-white-60.mb-16.medium-mb-8 {{ $t('node.tags') }}
        h1.o-heading-1.c-white {{ $t('node.title') }}
        p.landing__desc.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40 {{ $t('node.desc') }}
        router-link.o-btn.o-btn--pink.mr-8(
          :to="{ name: 'Estimate' }",
          @click.native="setEstimationScope('back-end')",
        )
          span.c-white.fs-16 {{ $t('node.ctaEstimate') }}
        button(type="button", @click="openContactModal()").o-link.c-white.mt-16.mb-16 {{ $t('common.orContactUs') }}
</template>

<script>
  import { openContactModal } from 'services/events'

  export default {
    methods: {
      openContactModal,
    },
  }
</script>

<style src="./Landing.sass" lang="sass" scoped></style>
