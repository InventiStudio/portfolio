<template lang="pug">
  footer.foot.c-white-60
    .row.align-center
      .foot__column.small-12.large-4.columns
        router-link.align-middle(:to="{ name: 'Home' }")
          img(src="~assets/inventi__name.svg", alt="TODO")
        a.foot__lang.o-link.c-white(href="#") Lang
        SocialLinks.mt-24
      .foot__column.small-8.medium-4.large-2.columns
        router-link.o-link.c-white.mb-8.block(:to="{ name: 'Home' }")
          | {{ $t('home.title') }}
        router-link.o-link.block(:to="{ name: 'Home', hash: '#services' }")
          | {{ $t('home.services.title') }}
        router-link.o-link.block(:to="{ name: 'Home', hash: '#testimonials' }")
          | {{ $t('home.testimonials.title') }}
        router-link.o-link.block(:to="{ name: 'Home', hash: '#contact' }")
          | {{ $t('contact.title') }}
      .foot__column.small-8.medium-4.large-2.columns
        router-link.o-link.c-white.mb-8.block(:to="{ name: 'Services' }")
          | {{ $t('services.title') }}
        router-link.o-link.block(:to="{ name: 'Vue' }")
          | {{ $t('vue.shortTitle') }}
        router-link.o-link.block(:to="{ name: 'Node' }")
          | {{ $t('node.shortTitle') }}
        router-link.o-link.block(:to="{ name: 'Design' }")
          | {{ $t('design.shortTitle') }}
      .foot__column.small-8.medium-4.large-2.columns
        span.fs-16.c-white.mb-8.block {{ $t('contact.title') }}
        a.o-link.block.fw-medium.c-white.underline(:href="mailToUrl('content.contact.emailAddress')")
          | {{ $t('content.contact.emailAddress') }}
        a.o-link.block.fw-medium.c-white.underline(:href="phoneToUrl('content.contact.phone1')")
          | {{ $t('content.contact.phone1') }}
        a.o-link.block.fw-medium.c-white.underline(:href="phoneToUrl('content.contact.phone2')")
          | {{ $t('content.contact.phone2') }}
        span.fs-16.block {{ $t('content.contact.place') }}
</template>

<script>
  export default {
    methods: {
      mailToUrl(mail) {
        return `mailto:${this.$t(mail)}`
      },
      phoneToUrl(phone) {
        return `tel:${this.$t(phone)}`.replace(/\s/g, '')
      },
    },
  }
</script>

<style src="./Foot.sass" lang="sass" scoped></style>
