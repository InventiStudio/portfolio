<template lang="pug">
  section.hire-us
    .row
      .column.mb-32.large-mb-0
        h2.hire-us__title.o-heading-1 {{ $t('workWithUs.title') }}
      .hire-us__buttons.column.small-12.large-6.align-middle
        router-link.hire-us__estimate.o-btn.text-center.o-btn--borderless(:to="{ name: 'Estimate' }")
          span.fs-16 {{ $t('common.estimateProject') }}
        button.hire-us__contact.o-btn.text-center(type="button", @click="openContactModal()")
          span.fs-16 {{ $t('common.orContactUs') }}
</template>

<script>
  import { openContactModal } from 'services/events'

  export default {
    methods: {
      openContactModal,
    },
  }
</script>

<style src="./HireUs.sass" lang="sass" scoped></style>
