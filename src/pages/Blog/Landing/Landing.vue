<template lang="pug">
  .landing.o-wave--sinus
    .row.column.text-center
      icon.c-white-80.mb-32.medium-mb-40(type="icon--feather")
      h1.o-heading-1.c-white {{ $t('blog.title') }}
      p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40.max-w-560 {{ $t('blog.desc') }}
</template>

<style src="./Landing.sass" lang="sass" scoped></style>
