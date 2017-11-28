<template lang="pug">
  section.landing.o-wave.text-center
    .landing__content.row
      .small-12.columns
        img.landing__logo(src="~assets/inventi__logo.svg", alt="TODO")
        h1.landing__heading.c-white-90 {{ $t('home.landing.title') }}
        p.landing__desc.o-paragraph.c-white-60 {{ $t('home.landing.desc') }}
        button.o-btn.o-btn--pink.mr-8
          span.c-white.fs-16 {{ $t('common.estimateProject') }}
        a(href="#").o-link.c-white {{ $t('common.orContactUs') }}
      .landing__services.small-12.columns
        h1.o-heading-1.c-white-90 {{ $t('home.services.title') }}
        p.o-paragraph.c-white-60.mb-48 {{ $t('home.services.desc') }}
      .small-12.medium-4.columns
        .o-card
          icon.c-ship-gray-15(type="icon--monitor")
          h3.o-heading-3.c-ship-gray {{ $t('vue.shortTitle') }}
          p.o-paragraph.c-ship-gray-40.mb-24 {{ $t('vue.desc') }}
          button.o-btn.o-btn--green.mr-8
            span.c-white.fs-16 {{ $t('services.card.cta') }}
          a(href="#").o-link.c-green {{ $t('common.orContactUs') }}
      .small-12.medium-4.columns
        .o-card
          icon.c-ship-gray-15(type="icon--server")
          h3.o-heading-3.c-ship-gray {{ $t('node.shortTitle') }}
          p.o-paragraph.c-ship-gray-40.mb-24 {{ $t('node.desc') }}
          button.o-btn.o-btn--blue.mr-8
            span.c-white.fs-16 {{ $t('services.card.cta') }}
          a(href="#").o-link.c-blue {{ $t('common.orContactUs') }}
      .small-12.medium-4.columns
        .o-card
          icon.c-ship-gray-15(type="icon--grid")
          h3.o-heading-3.c-ship-gray {{ $t('design.shortTitle') }}
          p.o-paragraph.c-ship-gray-40.mb-24 {{ $t('design.desc') }}
          button.o-btn.o-btn--orange.mr-8
            span.c-white.fs-16 {{ $t('services.card.cta') }}
          a(href="#").o-link.c-orange {{ $t('common.orContactUs') }}
</template>

<style src="./Landing.sass" lang="sass" scoped></style>
