<template lang="pug">
  section.landing.o-wave.text-center
    h1.landing__heading.c-white-90 {{ $t('home.landing.title') }}
    p.o-paragraph.c-white-60 {{ $t('home.landing.desc') }}
    button.o-button.bg-pink.border-pink.mr-8
      span.c-white.fs-16 {{ $t('home.landing.cta') }}
    a(href="#").c-white.fs-16.underline {{ $t('common.orContactUs') }}
    - var n = 0;
    while n < 40
      br
      - n++
</template>

<style src="./Landing.sass" lang="sass" scoped></style>
