<template lang="pug">
  .blog
    div(v-for="post in posts", :key="post.data.permalink")
      pre {{ post }}
      router-link.o-btn.o-btn--pink(:to="$routeByName('BlogPost', { params: { slug: post.data.permalink } })") Go to
</template>

<script>
  import { getAllBlogPosts } from 'services/blog'

  export default {
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
