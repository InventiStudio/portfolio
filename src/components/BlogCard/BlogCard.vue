<template lang="pug">
  article.o-card.row.p-0.overflow-hidden.u-no-nest(:class="[isDark ? 'blog__card--dark bg-mine-shaft' : 'bg-white']")
    .blog-card__content.column.small-12.large-6.small-order-2.large-order-1
      time.fs-11.mb-8.mt-8.block(
        :class="[isDark ? 'c-white-50' : 'c-ship-gray-40']",
        :datetime="date",
      ) {{ date }}
      router-link(:to="$routeByName('BlogPost', { params: { slug } })")
        h2.fs-28.fw-black.mb-16.mt-0(:class="[isDark ? 'c-white-80' : 'c-ship-gray-80']") {{ title }}
      p.o-paragraph.ff-lora.mb-24.medium-mb-32(:class="[isDark ? 'c-white-50' : 'c-ship-gray-50']") {{ description }}
      router-link.o-btn.o-btn--tundora.c-white(:to="$routeByName('BlogPost', { params: { slug } })")
        span.fs-16 {{ $t('common.readMore') }}
    .blog-card__cover.column.small-12.large-6.relative.small-order-1.large-order-2
      router-link.blog-card__img(
        :to="$routeByName('BlogPost', { params: { slug } })",
        :style="{ backgroundImage: coverUrl }",
        :class="`blog-card__triangle--${triangleDirection}--${isDark ? 'dark' : 'light'}`",
      )
</template>

<script>
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
      triangleDirection: {
        type: String,
        required: true,
      },
      isDark: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style src="./BlogCard.sass" lang="sass" scoped></style>
