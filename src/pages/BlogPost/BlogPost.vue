<template lang="pug">
  div.bg-alabaster
    .blog-post__landing.o-wave--sinus(:style="{ 'background-image': coverCss }")
      .row.align-center
        .column.small-12.medium-10.large-8.text-center
          p.fs-11.c-white-60.mb-16.medium-mb-8 {{ post.data.date }}
          h1.o-heading-1.c-white.mb-40 {{ post.data.title }}
    .blog-post__content
      .row
        .column.small-12.medium-10.medium-offset-1.large-8.large-offset-2
          article.blog-post(itemscope, itemtype="https://schema.org/Article", v-html="post.html")
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
    computed: {
      coverCss() {
        return `url(${this.post.data.coverPath})`
      },
    },
    async mounted() {
      this.post = await getBlogPostBySlug(this.$route.params.slug)
      this.$emit('updateHead')
    },
  }
</script>

<style src="./BlogPost.sass" lang="sass" scoped></style>
