<template lang="pug">
  footer.foot.c-white-60
    .row.align-center
      .foot__column.small-12.medium-4.columns
        router-link.align-middle(:to="{ name: 'Home' }")
          img(src="~assets/inventi__name.svg", alt="TODO")
        a.o-link.c-white.ml-24.md-ml-40.align-middle(href="#") Lang
        nav.o-social-links.mt-24
          a(href="#"): icon(type="icon--facebook")
          a(href="#"): icon(type="icon--linkedin")
          a(href="#"): icon(type="icon--dribble")
          a(href="#"): icon(type="icon--behance")
          a(href="#"): icon(type="icon--instagram")
          a(href="#"): icon(type="icon--github")
      .foot__column.small-12.medium-2.columns
        router-link.o-link.c-white.mb-8.block(:to="{ name: 'Home' }") {{ $t('home.title') }}
        router-link.o-link.block(:to="{ name: 'Home', hash: '#services' }") {{ $t('home.services.title') }}
        router-link.o-link.block(:to="{ name: 'Home', hash: '#testimonials' }") {{ $t('home.testimonials.title') }}
        router-link.o-link.block(:to="{ name: 'Home', hash: '#contact' }") {{ $t('contact.title') }}
      .foot__column.small-12.medium-2.columns
        router-link.o-link.c-white.mb-8.block(:to="{ name: 'Services' }") {{ $t('services.title') }}
        router-link.o-link.block(:to="{ name: 'Vue' }") {{ $t('vue.shortTitle') }}
        router-link.o-link.block(:to="{ name: 'Node' }") {{ $t('node.shortTitle') }}
      .foot__column.small-12.medium-2.columns
        span.fs-16.c-white {{ $t('contact.title') }}
</template>

<style src="./Foot.sass" lang="sass" scoped></style>
