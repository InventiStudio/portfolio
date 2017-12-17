<template lang="pug">
  .blog
    div(v-for="post in posts", :key="post.data.slug")
      pre {{ post }}
      router-link.o-btn.o-btn--pink(:to="$routeByName('BlogPost', { params: { slug: post.data.slug } })") Go to
</template>

<script>
  import head from 'src/head'
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
