<template lang="pug">
  section.testimonials.text-center
    .row.align-center
      .column.small-12
        h1.o-heading-1.c-ship-gray-80 {{ $t('home.testimonials.title') }}
        p.o-paragraph.c-ship-gray-40.mb-40.medium-mb-64 {{ $t('home.testimonials.desc') }}
      .column.small-12.medium-8.large-6
        .o-card.relative(v-for="testimonial in testimonials")
          img.testimonials__avatar(:src="testimonial.avatarSrc")
          h3.o-heading-3.c-ship-gray.mb-0 {{ getTranslation(testimonial, 'author') }}
          span.fs-16.c-ship-gray-40.mb-16.block {{ getTranslation(testimonial, 'position') }}
          p.o-paragraph.c-ship-gray “{{ getTranslation(testimonial, 'text') }}”
</template>

<script>
  export default {
    computed: {
      testimonials() {
        return [
          {
            key: 'smokefree',
            avatarSrc: 'http://lorempixel.com/400/200/',
          },
        ]
      },
    },
    methods: {
      getTranslation({ key }, property) {
        return this.$t(`home.testimonials.cases.${key}.${property}`)
      },
    },
  }
</script>

<style src="./Testimonials.sass" lang="sass" scoped></style>
