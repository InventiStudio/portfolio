<template lang="pug">
  section.posts.text-center.bg-alabaster
    .row.align-center
      .column.small-12
        h2.o-heading-1.c-white {{ $t('home.posts.title') }}
        p.o-paragraph.c-white-60.mb-40 {{ $t('home.posts.desc') }}
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
          Slide.posts__card.o-card.relative.mt-40(
            v-for="post in posts",
            key="post.key",
          )
            article.pl-32.pr-32.large-pl-80.large-pr-80
              img.posts__image(:src="post.image")
              h3.o-heading-3.c-ship-gray.mb-32 {{ getTranslation(post, 'title') }}
              p.o-paragraph.c-ship-gray {{ getTranslation(post, 'desc') }}
              a.o-btn.o-btn--purple.mt-24(
                v-if="getTranslation(post, 'url')",
                :href="getTranslation(post, 'url')"
              )
                span.c-white.fs-16 {{ $t('home.posts.cta') }}
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide,
    },
    computed: {
      posts() {
        // TODO: Just for testing
        return [
          {
            key: 'readability',
            image: 'https://blog.inventi.studio/images/how-we-improved-readability-of-our-functional-code__cover.jpg',
            caseUrl: 'https://inventi.studio/',
          },
        ]
      },
    },
    methods: {
      getTranslation({ key }, property) {
        return this.$t(`home.posts.cases.${key}.${property}`)
      },
    },
  }
</script>

<style src="./posts.sass" lang="sass" scoped></style>
