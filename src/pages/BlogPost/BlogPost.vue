<template lang="pug">
  .blog-post
    pre {{ post }}
    div(v-html="post.html")

</template>

<script>
  import { getBlogPostBySlug } from 'services/blog'

  export default {
    data() {
      return {
        post: [],
      }
    },
    async mounted() {
      this.post = await getBlogPostBySlug(this.$route.params.slug)
    },
  }
</script>

<style src="./BlogPost.sass" lang="sass" scoped></style>
