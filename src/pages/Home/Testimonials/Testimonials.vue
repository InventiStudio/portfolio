<template lang="pug">
  section.testimonials.text-center.bg-alabaster
    .row.align-center
      .column.small-12
        h2.o-heading-1.c-ship-gray-80 {{ $t('home.testimonials.title') }}
        p.o-paragraph.c-ship-gray-40.mb-16 {{ $t('home.testimonials.desc') }}
      .column.small-hidden.medium-1.large-2.align-middle
        button.testimonial__button.testimonial__button--prev(
          type="button",
          @click="prevSlide()",
          :class="{ 'testimonial__button--active': hasPrevSlide }",
        )
          icon(type="icon--arrow")
      .column.small-12.medium-10.large-8
        Carousel(
          :per-page="1",
          :min-swipe-distance="48",
          :pagination-enabled="true",
          :pagination-padding="12",
          pagination-active-color="#f8188e",
          pagination-color="#c9c9c9",
          :pagination-size="8",
          ref="carousel",
        )
          Slide.small-p-16.medium-p-32(
            v-for="testimonial in testimonials",
            key="testimonial.key",
          )
            .testimonials__card.o-card.relative.mt-40
              article.pl-24.pr-24.medium-pl-32.medium-pr-32.large-pl-80.large-pr-80
                img.testimonials__avatar(
                  v-if="testimonial.avatarSrc",
                  :src="`/static/testimonials/${testimonial.avatarSrc}`",
                  :alt="getTranslation(testimonial, 'author')",
                )
                h3.o-heading-3.c-ship-gray {{ getTranslation(testimonial, 'author') }}
                a.o-link.c-ship-gray-40.mb-16.block(
                  v-if="testimonial.positionUrl",
                  :href="testimonial.positionUrl",
                )
                  span {{ getTranslation(testimonial, 'position') }}
                span.o-paragraph.c-ship-gray-40.mb-16(v-else="") {{ getTranslation(testimonial, 'position') }}
                p.o-paragraph.c-ship-gray “{{ getTranslation(testimonial, 'text') }}”
                router-link.o-btn.o-btn--purple.mt-24(
                  v-if="testimonial.postSlug",
                  :to="$routeByName('BlogPost', { params: { slug: testimonial.postSlug } })",
                )
                  span.c-white.fs-16 {{ $t('home.testimonials.cta') }}
      .column.small-hidden.medium-1.large-2.align-middle
        button.testimonial__button.testimonial__button--next(
          type="button",
          @click="nextSlide()",
          :class="{ 'testimonial__button--active': hasNextSlide }",
        )
          icon(type="icon--arrow")
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        hasPrevSlide: false,
        hasNextSlide: false,
      }
    },
    computed: {
      testimonials() {
        return [
          {
            key: 'promis',
            avatarSrc: 'vincentstammbach.jpeg',
            positionUrl: '',
            postSlug: 'promis',
          },
          {
            key: 'smokefree',
            avatarSrc: 'leszekwiland.jpg',
            positionUrl: 'https://smokefree.place/62nxc1',
          },
          {
            key: 'zapytajcoacha',
            avatarSrc: 'henrykpeplinski.jpg',
            positionUrl: 'https://zapytajcoacha.pl',
            postSlug: 'zapytajcoacha',
          },
        ]
      },
    },
    methods: {
      getTranslation({ key }, property) {
        return this.$t(`home.testimonials.cases.${key}.${property}`)
      },
      prevSlide() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage())
      },
      nextSlide() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage())
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.hasPrevSlide = this.$refs.carousel.canAdvanceBackward
        this.hasNextSlide = this.$refs.carousel.canAdvanceForward
      })
      this.$watch(
        () => this.$refs.carousel.canAdvanceBackward,
        canAdvanceBackward => (this.hasPrevSlide = canAdvanceBackward),
      )
      this.$watch(
        () => this.$refs.carousel.canAdvanceForward,
        canAdvanceForward => (this.hasNextSlide = canAdvanceForward),
      )
    },
  }
</script>

<style src="./Testimonials.sass" lang="sass" scoped></style>
