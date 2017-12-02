<template lang="pug">
  section.landing
    .row.column.text-center
      icon.c-white-90.mb-32.medium-mb-40(type="icon--monitor")
      p.fs-11.c-white-60.mb-16.medium-mb-8 {{ $t('vue.tags') }}
      h1.o-heading-1.c-white {{ $t('vue.title') }}
      p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40.max-w-560 {{ $t('vue.desc') }}
      button.o-btn.o-btn--navy.mr-8
        span.c-white.fs-16 {{ $t('vue.ctaEstimate') }}
      button(type="button").o-link.c-white.mt-16.mb-16 {{ $t('common.orContactUs') }}
</template>

<style src="./Landing.sass" lang="sass" scoped></style>
