<template lang="pug">
  article.o-card.row.p-0.bg-white.overflow-hidden.u-no-nest
    .blog-card__content.column.small-12.medium-6.small-order-2.medium-order-1
      p.fs-11.c-ship-gray-40.mb-8 {{ date }}
      h2.fs-28.fw-black.c-ship-gray-80.mb-16.mt-0 {{ title }}
      h3.o-paragraph.c-ship-gray-50.mb-24.medium-mb-32 {{ description }}
      router-link.o-link.c-pink(:to="$routeByName('BlogPost', { params: { slug } })")
        span.fs-16 {{ $t('common.readMore') }}
    .blog-card__cover.column.small-12.medium-6.relative.small-order-1.medium-order-2
      router-link.blog-card__img(
        :to="$routeByName('BlogPost', { params: { slug } })",
        :style="{ backgroundImage: coverUrl }",
      )
</template>

<script>
  import { openContactModal } from 'services/events'

  export default {
    props: {
      date: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      coverUrl: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
    },
    methods: {
      openContactModal,
    },
  }
</script>

<style src="./BlogCard.sass" lang="sass" scoped></style>
