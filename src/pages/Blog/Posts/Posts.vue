<template lang="pug">
  section.posts.bg-alabaster
    .row.column.align-center
      BlogCard.posts__post(
        v-for="post in posts",
        :key="post.data.slug",
        :title="post.data.title",
        :description="post.data.description",
        :date="post.data.date",
        :cover="post.data.cover",
        :slug="post.data.slug",
        :color="post.data.color",
      )
</template>

<script>
  import { getAllBlogPosts } from 'services/blog'
  import BlogCard from 'components/BlogCard/BlogCard'

  export default {
    components: {
      BlogCard,
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

<style src="./Posts.sass" lang="sass" scoped></style>
