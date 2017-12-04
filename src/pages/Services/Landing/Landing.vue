<template lang="pug">
  .landing.o-wave--sinus.text-center
    .row.column
      .mb-32.medium-mb-40
        icon.c-blue(type="icon--monitor")
        icon.c-pink.ml-24.mr-24(type="icon--server")
        icon.c-violet(type="icon--grid")
      p.fs-11.c-white-60.mb-16.medium-mb-8.uppercase {{ $t('services.title') }}
      h1.o-heading-1.c-white {{ $t('services.landing.title') }}
      p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40.max-w-560 {{ $t('services.desc') }}
</template>

<style src="./Landing.sass" lang="sass" scoped></style>
