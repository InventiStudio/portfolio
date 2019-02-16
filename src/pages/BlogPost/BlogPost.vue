<template lang="pug">
  div.bg-alabaster#blog-post-content
    LoadingBar.blog-post__progress(
      id="blog-post-loading-bar"
      :progress="progress"
      :onErrorDone="()=>{}"
      :onProgressDone="()=>{}"
    )
    .blog-post__landing.o-wave--sinus(
      v-if="post.additional.coverFullUrl",
      :style="{ 'background-image': `url(${post.additional.coverFullUrl})` }",
    )
      .row.align-center
        .column.small-12.medium-10.large-8.text-center
          p.fs-11.fw-medium.c-white.mb-16.letter-1 {{ post.additional.formattedDate }}
          h1.o-heading-1.c-white {{ post.data.title }}
          p.fs-11.fw-medium.c-white-90.mt-8.mb-40.letter-3 {{ post.data.tags }}
    .blog-post__content
      .row
        .column.small-12.medium-10.medium-offset-1.large-8.large-offset-2.mb-64
          DynamicHTML.blog-post__article(:template="post.html")
          ShareButtons
    HireUs.hire-us--dark
</template>

<script>
  import Vue from 'vue'
  import head from 'src/head'
  import router from 'src/router'
  import { getBlogPostBySlug } from 'services/blog'
  import BlogColorPalette from 'components/BlogColorPalette/BlogColorPalette'
  import BlogScope from 'components/BlogScope/BlogScope'
  import HireUs from 'components/HireUs/HireUs'
  import ShareButtons from 'components/ShareButtons/ShareButtons'
  import LoadingBar from 'vue2-loading-bar'

  // We need this to be able to inject Vue components into BlogPost (like e.g <router-link>). Wouldn't work with (v-html="").
  // https://stackoverflow.com/questions/37133282/how-to-use-components-in-v-html
  // https://jsfiddle.net/Linusborg/1zdzu7k1/
  const DynamicHTML = {
    props: {
      template: {
        type: String,
        required: true,
      },
    },
    components: {
      BlogColorPalette,
      BlogScope,
    },
    data() {
      return {
        templateRender: null,
      }
    },
    render() {
      return this.templateRender()
    },
    watch: {
      template:{
        immediate: true,
        handler() {
          const res = Vue.compile(`<article>${this.template}</article>`)
          this.templateRender = res.render
          this.$options.staticRenderFns = []
          this._staticTrees = []
          for (let i in res.staticRenderFns) { // eslint-disable-line
            this.$options.staticRenderFns.push(res.staticRenderFns[i])
          }
        },
      },
    },
  }

  export default {
    components: {
      DynamicHTML,
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
          { property: 'article:published_time', content: this.post.additional.formattedDate },
          { itemprop: 'datePublished', content: this.post.additional.formattedDate },
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
      try {
        this.post = await getBlogPostBySlug(this.$route.params.slug)
        this.$emit('updateHead')
        window.addEventListener('scroll', this.handleScroll)
      } catch (err) {
        head.responseCode.code = 404
        router.push({ name: 'Blog' })
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style src="./BlogPost.sass" lang="sass" scoped></style>
<style src="./Article.sass" lang="sass"></style>
