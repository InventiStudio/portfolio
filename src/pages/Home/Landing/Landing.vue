<template lang="pug">
  section.landing.o-wave--sinus.text-center
    .landing__content.row
      .small-12.columns
        img.landing__logo(src="~assets/inventi__logo.svg", alt="TODO")
        h1.landing__heading.c-white-90 {{ $t('home.landing.title') }}
        p.landing__desc.o-paragraph.c-white-60 {{ $t('home.landing.desc') }}
        button.o-btn.o-btn--pink.mr-8
          span.c-white.fs-16 {{ $t('common.estimateProject') }}
        a(href="#").o-link.c-white {{ $t('common.orContactUs') }}
      .landing__services.small-12.columns(:id="constants.sectionIds.home.services")
        h1.o-heading-1.c-white-90 {{ $t('home.services.title') }}
        p.o-paragraph.c-white-60.mb-40.md-mb-48 {{ $t('home.services.desc') }}
      .small-12.large-4.columns
        article.o-card.o-card--max-width.mb-40
          icon.c-ship-gray-15(type="icon--monitor")
          h3.o-heading-3.c-ship-gray {{ $t('vue.shortTitle') }}
          p.o-paragraph.c-ship-gray-40.mb-24 {{ $t('vue.desc') }}
          router-link.o-btn.o-btn--green.mr-8(:to="{ name: 'Vue' }")
            span.c-white.fs-16 {{ $t('services.card.cta') }}
          button.o-link.c-green.p0 {{ $t('common.orContactUs') }}
      .small-12.large-4.columns
        article.o-card.o-card--max-width.mb-40
          icon.c-ship-gray-15(type="icon--server")
          h3.o-heading-3.c-ship-gray {{ $t('node.shortTitle') }}
          p.o-paragraph.c-ship-gray-40.mb-24 {{ $t('node.desc') }}
          router-link.o-btn.o-btn--blue.mr-8(:to="{ name: 'Node' }")
            span.c-white.fs-16 {{ $t('services.card.cta') }}
          button.o-link.c-blue.p0 {{ $t('common.orContactUs') }}
      .small-12.large-4.columns
        article.o-card.o-card--max-width.mb-40
          icon.c-ship-gray-15(type="icon--grid")
          h3.o-heading-3.c-ship-gray {{ $t('design.shortTitle') }}
          p.o-paragraph.c-ship-gray-40.mb-24 {{ $t('design.desc') }}
          router-link.o-btn.o-btn--orange.mr-8(:to="{ name: 'Design' }")
            span.c-white.fs-16 {{ $t('services.card.cta') }}
          button.o-link.c-orange.p0 {{ $t('common.orContactUs') }}
</template>

<style src="./Landing.sass" lang="sass" scoped></style>

<script>
  import constants from 'src/constants'

  export default {
    computed: {
      constants: () => constants,
    },
  }
</script>
