<template lang="pug">
  article.row.card.o-card.mb-40.u-no-nest
    .column.small-12.medium-3.large-12.align-middle
      icon.card__icon.c-ship-gray-15(:type="iconType")
    .card__content.column.small-12.medium-9.large-12
      h3.card__title.o-heading-3.c-ship-gray {{ $t(title) }}
      p.card__desc.o-paragraph.c-ship-gray-40.mb-24 {{ $t(desc) }}
      router-link.card__to.o-btn(
        :to="ctaTo",
        :class="`o-btn--${color}`",
      )
        span.c-white.fs-16 {{ $t(ctaText) }}
      button.card__contact.o-link(
        type="button",
        v-if="contactUs",
        @click="openContactModal()",
        :class="`c-${color}`",
      ) {{ $t('common.orContactUs') }}
</template>

<script>
  export default {
    props: {
      iconType: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      ctaTo: {
        type: Object,
        required: true,
      },
      ctaText: {
        type: String,
        required: true,
      },
      contactUs: {
        type: Boolean,
        default: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
    methods: {
      openContactModal() {},
    },
  }
</script>

<style src="./Card.sass" lang="sass" scoped></style>
