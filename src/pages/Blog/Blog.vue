<template lang="pug">
  main.bg-gallery.relative
    .blog__bg
    section.blog__landing
      .row.column
        h1.o-heading-1.c-white {{ $t('blog.title') }}
        p.o-paragraph.c-white-60.mt-16.medium-mt-4 {{ $t('blog.desc') }}
    section.blog__posts
      .row.column.align-center
        BlogCard.blog__post(
          v-for="(post, index) in $root.blogposts",
          :key="post.data.slug",
          :title="post.data.title",
          :description="post.data.description",
          :date="post.additional.formattedDate",
          :cover-url="`url(${post.additional.coverFullUrl})`",
          :slug="post.data.slug",
          :color="post.data.color",
          :triangle-direction="index % 2 === 0 ? 'right' : 'left'",
        )
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import BlogCard from 'components/BlogCard/BlogCard'
  import HireUs from 'components/HireUs/HireUs'

  export default {
    head: head.set({
      title() {
        return this.$t('blog.title')
      },
      description() {
        return this.$t('blog.desc')
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'), route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('blog.title'), route: this.$router.resolve(this.$routeByName('Blog')) },
        ]
      },
    }),

    components: {
      BlogCard,
      HireUs,
    },
  }
</script>

<style src="./Blog.sass" lang="sass" scoped></style>
