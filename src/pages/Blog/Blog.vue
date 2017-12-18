<template lang="pug">
  div
    Landing
    Posts
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import { getAllBlogPosts } from 'services/blog'
  import Landing from './Landing/Landing'
  import Posts from './Posts/Posts'

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
      HireUs,
      Landing,
      Posts,
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
