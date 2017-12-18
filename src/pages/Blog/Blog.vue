<template lang="pug">
  div.bg-alabaster
    section.blog__landing.o-wave--sinus
      .row.column.text-center
        icon.c-white-80.mb-32.medium-mb-40(type="icon--feather")
        h1.o-heading-1.c-white {{ $t('blog.title') }}
        p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40.max-w-560 {{ $t('blog.desc') }}
    section.blog__posts
      .row.column.align-center
        BlogCard.blog__post(
          v-for="post in posts",
          :key="post.data.slug",
          :title="post.data.title",
          :description="post.data.description",
          :date="post.data.date",
          :cover="post.data.cover",
          :slug="post.data.slug",
          :color="post.data.color",
        )
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import BlogCard from 'components/BlogCard/BlogCard'
  import HireUs from 'components/HireUs/HireUs'
  import { getAllBlogPosts } from 'services/blog'

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
    data() {
      return {
        posts: [],
      }
    },
    async mounted() {
      this.posts = await getAllBlogPosts()
    },
  }
</script>

<style src="./Blog.sass" lang="sass" scoped></style>
