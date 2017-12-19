<template lang="pug">
  div.bg-alabaster#blog-post-content(itemscope, itemtype="https://schema.org/Article")
    LoadingBar.blog-post__progress(
      id="blog-post-loading-bar"
      :progress="progress"
      :onErrorDone="()=>{}"
      :onProgressDone="()=>{}"
    )
    .blog-post__landing.o-wave--sinus(:style="{ 'background-image': `url(${post.additional.coverFullUrl})` }")
      .row.align-center
        .column.small-12.medium-10.large-8.text-center
          p.fs-11.c-white.mb-16.medium-mb-8 {{ post.additional.formattedDate }}
          h1.o-heading-1.c-white.mb-40 {{ post.data.title }}
    .blog-post__content
      .row
        .column.small-12.medium-10.medium-offset-1.large-8.large-offset-2.mt-64.mb-64
          ShareButtons
          .blog-post__article.mt-40.mb-40(v-html="post.html")
          ShareButtons
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import { getBlogPostBySlug } from 'services/blog'
  import HireUs from 'components/HireUs/HireUs'
  import ShareButtons from 'components/ShareButtons/ShareButtons'
  import LoadingBar from 'vue2-loading-bar'

  export default {
    components: {
      HireUs,
      ShareButtons,
      LoadingBar,
    },
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
        return this.post.additional.coverFullUrl
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
        progress: 0,
        post: {
          additional: {},
          data: {},
          html: '',
        },
      }
    },
    methods: {
      handleScroll() {
        this.progress = Math.min(
          (100 * document.documentElement.scrollTop) / (document.getElementById('blog-post-content').scrollHeight - window.innerHeight),
          99.999,
        )
      },
    },
    async mounted() {
      this.post = await getBlogPostBySlug(this.$route.params.slug)
      this.$emit('updateHead')
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style src="./BlogPost.sass" lang="sass" scoped></style>
<style src="./Article.sass" lang="sass"></style>
