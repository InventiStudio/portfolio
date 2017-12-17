<template lang="pug">
  article.blog
    section.blog__landing.o-wave--sinus
      .row.column.text-center
        .mb-32.medium-mb-40
          icon.c-white-80(type="icon--feather")
        h1.o-heading-1.c-white {{ $t('blog.title') }}
        p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40.max-w-560 {{ $t('blog.desc') }}
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
