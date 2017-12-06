<template lang="pug">
  section.testimonials.text-center.bg-alabaster
    .row.align-center
      .column.small-12
        h2.o-heading-1.c-ship-gray-80 {{ $t('home.testimonials.title') }}
        p.o-paragraph.c-ship-gray-40.mb-40 {{ $t('home.testimonials.desc') }}
      .column.small-12.medium-8.large-6
        Carousel(
          :per-page="1",
          :min-swipe-distance="48",
          :pagination-enabled="true",
          :pagination-padding="12",
          pagination-active-color="#f8188e",
          pagination-color="#c9c9c9",
          :pagination-size="8",
        )
          Slide.small-p-16.medium-p-32(
            v-for="testimonial in testimonials",
            key="testimonial.key",
          )
            .testimonials__card.o-card.relative.mt-40
              article.pl-32.pr-32.large-pl-80.large-pr-80
                img.testimonials__avatar(:src="testimonial.avatarSrc")
                h3.o-heading-3.c-ship-gray {{ getTranslation(testimonial, 'author') }}
                span.fs-16.c-ship-gray-40.mb-16.block {{ getTranslation(testimonial, 'position') }}
                p.o-paragraph.c-ship-gray “{{ getTranslation(testimonial, 'text') }}”
                a.o-btn.o-btn--purple.mt-24(v-if="testimonial.caseUrl", :href="testimonial.caseUrl")
                  span.c-white.fs-16 {{ $t('home.testimonials.cta') }}
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide,
    },
    computed: {
      testimonials() {
        // TODO: Just for testing
        return [
          {
            key: 'smokefree',
            avatarSrc: 'http://lorempixel.com/400/200/',
            caseUrl: 'https://inventi.studio/',
          },
          {
            key: 'zapytajcoacha',
            avatarSrc: 'http://lorempixel.com/400/200/',
            caseUrl: 'https://someurl.com',
          },
          {
            key: 'test1',
            avatarSrc: 'http://lorempixel.com/400/200/',
          },
          {
            key: 'test2',
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
