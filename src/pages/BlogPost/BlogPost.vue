<template lang="pug">
  article.blog-post(itemscope, itemtype="https://schema.org/Article")
    pre {{ post }}
    div(v-html="post.html")

</template>

<script>
  import head from 'src/head'
  import { getBlogPostBySlug } from 'services/blog'

  export default {
    head: head.set({
      title() {
        return this.$t(this.post.data.title)
      },
      description() {
        return this.$t(this.post.data.description)
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'), route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('blog.title'), route: this.$router.resolve(this.$routeByName('Blog')) },
          { name: this.$t(this.post.data.title),
            route: this.$router.resolve(this.$routeByName('BlogPost', { params: this.$route.params })),
          },
        ]
      },
      alternate() {
        const alternates = this.post.data.alternate ? {
          ...this.post.data.alternate,
          [this.$route.params.lang]: this.$route.params.slug,
        } : {
          pl: 'placeholder',
          en: 'placeholder',
        }
        return Object.keys(alternates).map(lang => ({
          rel: 'alternate',
          hreflang: lang,
          href: `${window.location.origin}${this.$routeByName('BlogPost', { params: { lang, slug: alternates[lang] } }).path}`,
        }))
      },
      image() {
        return this.post.data.coverPath
      },
    }, {
      meta() {
        return [
          { property: 'og:type', content: 'article' },
          { property: 'article:published_time', content: this.post.data.date },
          { itemprop: 'datePublished', content: this.post.data.date },
          { name: 'author', content: this.$t('common.inventiStudio') },
          { itemprop: 'author', content: this.$t('common.inventiStudio') },
          { itemprop: 'headline', content: this.post.data.title },
        ]
      },
    }),
    data() {
      return {
        post: {
          data: {},
          html: '',
        },
      }
    },
    async mounted() {
      this.post = await getBlogPostBySlug(this.$route.params.slug)
      this.$emit('updateHead')
    },
  }
</script>

<style src="./BlogPost.sass" lang="sass" scoped></style>
