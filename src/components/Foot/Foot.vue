<template lang="pug">
  footer.foot.c-white-60
    .row.align-center
      .foot__column.small-12.large-expand.columns
        router-link.align-middle.valign-middle(:to="$routeByName('Home')")
          img(src="~assets/inventi__name.svg", :alt="$t('common.inventiStudio')")
        nav.inline-block.valign-middle
          h2.m-0.inline-block: a.foot__lang.o-link.c-white(:href="alternate")
            | {{ secondLanguageName }}
        SocialLinks.mt-24
      nav.foot__column.small-8.medium-4.large-2.columns.small-mt-32.large-mt-0
        h2.m-0: router-link.o-link.c-white.mb-8.block(:to="$routeByName('Home')")
          | {{ $t('home.title') }}
        router-link.o-link.block(@click.native="scrollToSection('services')", :to="$routeByName('Home', { hash: '#services' })")
          | {{ $t('home.services.title') }}
        router-link.o-link.block(@click.native="scrollToSection('testimonials')", :to="$routeByName('Home', { hash: '#testimonials' })")
          | {{ $t('home.testimonials.title') }}
        router-link.o-link.block(@click.native="scrollToSection('posts')", :to="$routeByName('Home', { hash: '#posts' })")
          | {{ $t('home.posts.title') }}
      nav.foot__column.small-8.medium-4.large-2.columns.small-mt-32.large-mt-0
        h2.m-0: router-link.o-link.c-white.mb-8.block(:to="$routeByName('Services')")
          | {{ $t('services.title') }}
        router-link.o-link.block(:to="$routeByName('Vue')")
          | {{ $t('vue.shortTitle') }}
        router-link.o-link.block(:to="$routeByName('Node')")
          | {{ $t('node.shortTitle') }}
        router-link.o-link.block(:to="$routeByName('Design')")
          | {{ $t('design.shortTitle') }}
      nav.foot__column.columns.small-8.medium-4.large-shrink.xlarge-2.small-mt-32.large-mt-0
        h2.m-0: span.fs-16.fw-regular.c-white.mb-8.block {{ $t('contact.title') }}
        a.o-link.block.fw-medium.c-white(:href="mailToUrl('content.contact.emailAddress')")
          | {{ $t('content.contact.emailAddress') }}
        a.o-link.block.fw-medium.c-white(:href="phoneToUrl('content.contact.phone1')")
          | {{ $t('content.contact.phone1') }}
        a.o-link.block.fw-medium.c-white(:href="phoneToUrl('content.contact.phone2')")
          | {{ $t('content.contact.phone2') }}
        span.fs-16.block {{ $t('content.contact.place') }}
</template>

<script>
  import smoothScrollTo from 'services/scroll'
  import constants from 'src/constants'
  import SocialLinks from 'components/SocialLinks/SocialLinks'
  import eventBus from 'services/eventBus'

  export default {
    components: {
      SocialLinks,
    },
    data() {
      return {
        alternate: '',
      }
    },
    computed: {
      constants: () => constants,
      secondLanguageLocale() {
        switch (this.$i18n.locale) {
          case 'en': return 'pl'
          case 'pl': return 'en'
          default: throw new Error('Unknown locales')
        }
      },
      secondLanguageName() {
        return this.$t(`content.languages.${this.secondLanguageLocale}`)
      },
    },
    methods: {
      mailToUrl(mail) {
        return `mailto:${this.$t(mail)}`
      },
      phoneToUrl(phone) {
        return `tel:${this.$t(phone)}`.replace(/\s/g, '')
      },
      scrollToSection(name) {
        smoothScrollTo(this.constants.sectionIds.home[name])
      },
      getAlternateLink(links) {
        this.alternate = (links.find(link => link.hreflang === this.secondLanguageLocale) || {}).href
      },
    },
    mounted() {
      eventBus.$on('updateAlternateLink', (links) => {
        this.getAlternateLink(links)
      })
    },
  }
</script>

<style src="./Foot.sass" lang="sass" scoped></style>
