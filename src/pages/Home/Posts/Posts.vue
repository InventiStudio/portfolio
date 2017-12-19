<template lang="pug">
  section.posts.text-center.bg-alabaster
    .row.align-center
      .column.small-12(:id="constants.sectionIds.home.posts")
        h2.o-heading-1.c-white {{ $t('home.posts.title') }}
        p.o-paragraph.c-white-60.mb-16 {{ $t('home.posts.desc') }}
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
          pagination-active-color="#ffffff",
          pagination-color="#EEB3D4",
          :pagination-size="8",
          ref="carousel",
        )
          Slide.small-p-16.medium-p-32(
            v-for="post in posts",
            key="post.key",
          )
            .posts__card.o-card.relative.mt-40
              article.pl-24.pr-24.medium-pl-32.medium-pr-32.large-pl-80.large-pr-80
                img.posts__image(:src="post.additional.miniCoverFullUrl", :alt="post.data.title")
                h3.o-heading-3.c-ship-gray.mb-32 {{ post.data.title }}
                p.o-paragraph.c-ship-gray {{ post.data.description }}
                router-link.o-btn.o-btn--pink.mt-24(
                  :to="$routeByName('BlogPost', { params: { slug: post.data.slug } })"
                )
                  span.c-white.fs-16 {{ $t('home.posts.cta') }}
      .column.small-hidden.medium-1.large-2.align-middle
        button.testimonial__button.testimonial__button--next(
          type="button",
          @click="nextSlide()",
          :class="{ 'testimonial__button--active': hasNextSlide }",
        )
          icon(type="icon--arrow")
</template>

<script>
  import constants from 'src/constants'
  import { Carousel, Slide } from 'vue-carousel'
  import { getAllBlogPosts } from 'services/blog'

  export default {
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        posts: [],
        hasPrevSlide: false,
        hasNextSlide: false,
      }
    },
    computed: {
      constants: () => constants,
    },
    methods: {
      prevSlide() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage())
      },
      nextSlide() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage())
      },
    },
    async mounted() {
      this.posts = await getAllBlogPosts()
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

<style src="./Posts.sass" lang="sass" scoped></style>
