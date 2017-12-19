<template lang="pug">
  .share-buttons
    .row
      .column
        VueGoodshareFacebook.share-buttons__button.o-btn(has_icon, has_counter)
        VueGoodshareLinkedin.share-buttons__button(has_icon, has_counter)
        VueGoodshareReddit.share-buttons__button(has_icon, has_counter)
        VueGoodshareTwitter.share-buttons__button(has_icon, has_counter)
        VueGoodshareGoogle.share-buttons__button(has_icon, has_counter)
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
    computed: {
      rss() {
        return `${window.location.origin}/${this.$route.params.lang}/feed/rss`
      },
    },
  }
</script>

<style src="./ShareButtons.sass" lang="sass" scoped></style>
