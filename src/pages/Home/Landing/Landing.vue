<template lang="pug">
  .landing.o-wave--sinus.text-center
    .landing__content.row.align-center
      .landing__title.column.small-12
        img.landing__logo(src="~assets/inventi__logo.svg", :alt="$t('home.landing.logo')")
        h1.landing__heading.c-white {{ $t('home.landing.title') }}
        p.landing__desc.o-paragraph.c-white-60 {{ $t('home.landing.desc') }}
        router-link.o-btn.o-btn--pink.mr-8(:to="{ name: 'Estimate' }")
          span.c-white.fs-16 {{ $t('common.estimateProject') }}
        button.o-link.c-white(type="button", @click="openContactModal()") {{ $t('common.orContactUs') }}
    section.landing__content.row.align-center.pb-64
      .landing__services.column.small-12(:id="constants.sectionIds.home.services")
        h2.o-heading-1.c-white {{ $t('home.services.title') }}
        p.o-paragraph.c-white-60.mb-40.mobile-mb-48 {{ $t('home.services.desc') }}
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--monitor",
          title="vue.shortTitle",
          desc="vue.desc",
          :cta-to="{ name: 'Vue' }",
          cta-text="services.card.cta",
          :contact-us="true",
          color="green",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--server",
          title="node.shortTitle",
          desc="node.desc",
          :cta-to="{ name: 'Node' }",
          cta-text="services.card.cta",
          :contact-us="true",
          color="blue",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--grid",
          title="design.shortTitle",
          desc="design.desc",
          :cta-to="{ name: 'Design' }",
          cta-text="services.card.cta",
          :contact-us="true",
          color="orange",
        )
</template>

<style src="./Landing.sass" lang="sass" scoped></style>

<script>
  import constants from 'src/constants'
  import { openContactModal } from 'services/events'

  export default {
    computed: {
      constants: () => constants,
    },
    methods: {
      openContactModal,
    },
  }
</script>
