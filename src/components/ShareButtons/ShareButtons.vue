<template lang="pug">
  .share-buttons
    .row
      .column
        VueGoodshareFacebook.share-buttons__button.o-btn(
          has_icon,
          has_counter,
          :page_title="title",
          :page_description="description",
          :page_url="path"
        )
        VueGoodshareLinkedin.share-buttons__button(
          has_icon,
          has_counter,
          :page_title="title",
          :page_description="description",
          :page_url="path"
        )
        VueGoodshareReddit.share-buttons__button(
          has_icon,
          has_counter,
          :page_title="title",
          :page_description="description",
          :page_url="path"
        )
        VueGoodshareTwitter.share-buttons__button(
          has_icon,
          :page_title="title",
          :page_description="description",
          :page_url="path"
        )
        a.o-btn.share-buttons__button.share-buttons__button--rss(:href="rss", target="_blank")
          icon.c-white.fs-16(type="icon--rss")
</template>

<script>
  import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook'
  import VueGoodshareLinkedin from 'vue-goodshare/src/providers/LinkedIn'
  import VueGoodshareTwitter  from 'vue-goodshare/src/providers/Twitter'
  import VueGoodshareGoogle   from 'vue-goodshare/src/providers/GooglePlus'
  import VueGoodshareReddit   from 'vue-goodshare/src/providers/Reddit'

  export default {
    components: {
      VueGoodshareFacebook,
      VueGoodshareLinkedin,
      VueGoodshareTwitter,
      VueGoodshareGoogle,
      VueGoodshareReddit,
    },
    props: ['title', 'description'],
    computed: {
      rss() {
        return `${window.location.origin}/${this.$route.params.lang}/feed/rss`
      },
      path() {
        return `${window.location.origin}${this.$route.path}`
      },
    },
  }
</script>

<style src="./ShareButtons.sass" lang="sass" scoped></style>
