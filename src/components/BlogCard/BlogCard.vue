<template lang="pug">
  article.o-card.row.p-0.bg-white.overflow-hidden
    .blog-card__content.column.small-12.medium-6
      p.fs-11.c-ship-gray-40.mb-8 {{ dateFormatted }}
      h2.fs-28.fw-black.c-ship-gray-80.mb-16.mt-0 {{ title }}
      h3.o-paragraph.ff-lora.c-ship-gray-50.mb-32 {{ description }}
      router-link.o-link.c-pink(:to="$routeByName('BlogPost', { params: { slug } })")
        span.fs-16 {{ $t('common.readMore') }}
    .column.small-12.medium-6.relative
      .blog-card__cover(:style="{ backgroundImage: `url(/static/blog/${cover})` }")
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
      cover: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
    },
    computed: {
      dateFormatted() {
        const date = new Date(this.date)
        let dd = date.getDate()
        let mm = date.getMonth() + 1
        const yyyy = date.getFullYear()
        if (dd < 10) dd = `0${dd}`
        if (mm < 10) mm = `0${mm}`
        return `${yyyy}-${mm}-${dd}`
      },
    },
    methods: {
      openContactModal,
    },
  }
</script>

<style src="./BlogCard.sass" lang="sass" scoped></style>
