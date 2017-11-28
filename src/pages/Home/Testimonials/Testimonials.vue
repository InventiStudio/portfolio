<template lang="pug">
  section.testimonials.text-center
    .row.align-center
      .small-12.columns
        h1.o-heading-1.c-ship-gray-80 {{ $t('home.testimonials.title') }}
        p.o-paragraph.c-ship-gray-40.mb-48 {{ $t('home.testimonials.desc') }}
      .small-12.medium-8.large-6.columns
        .o-card
          h3.o-heading-3.c-ship-gray.mb-0 John Doe
          span.fs-16.c-ship-gray-40.mb-16.block CEO at DoeApp
          p.o-paragraph.c-ship-gray “Lorem ipsum...”
</template>

<style src="./Testimonials.sass" lang="sass" scoped></style>
