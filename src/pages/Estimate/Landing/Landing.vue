<template lang="pug">
  section.landing
    .row.column.text-center
      icon.c-white-80.mb-32.medium-mb-40(type="icon--clock")
      h1.o-heading-1.c-white {{ $t('estimate.title') }}
      p.o-paragraph.c-white-60.mt-16.medium-mt-4.max-w-560 {{ $t('estimate.desc') }}
</template>

<style src="./Landing.sass" lang="sass" scoped></style>
