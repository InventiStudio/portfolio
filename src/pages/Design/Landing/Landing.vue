<template lang="pug">
  .landing.text-center
    .landing__content.row.align-center
      .landing__title.column.small-12
        icon.c-white-80.mb-40(type="icon--grid")
        p.fs-11.c-white-60.mb-16.medium-mb-8 {{ $t('design.tags') }}
        h1.o-heading-1.c-white {{ $t('design.title') }}
        p.landing__desc.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40 {{ $t('design.desc') }}
        router-link.o-btn.o-btn--scampi.mr-8(
          :to="{ name: 'Estimate' }",
          @click.native="setEstimationScope('design')",
        )
          span.c-white.fs-16 {{ $t('design.ctaEstimate') }}
        button(type="button", @click="openContactModal()").o-link.c-white.mt-16.mb-16 {{ $t('common.orContactUs') }}
    .landing__uiux.row.align-center
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--layout",
          title="design.ui.title",
          desc="design.ui.desc",
          :contact-us="false",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--user-check",
          title="design.ux.title",
          desc="design.ux.desc",
          :contact-us="false",
        )
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
