<template lang="pug">
  section.contact
    img.contact__map(src="~assets/images/Home/contact__map.svg")
    .row
      h1.o-heading-1.c-white-90 {{ $t('contact.title') }}
      p.o-paragraph.c-white-60 {{ $t('contact.desc') }}
      .small-12.large-6.columns
        .o-card.o-wave--gray
          a.o-link.fw-medium.block.c-purple.underline(:href="mailToUrl('content.contact.emailAddress')")
            | {{ $t('content.contact.emailAddress') }}
          a.o-link.fw-medium.block.c-ship-gray.underline(:href="phoneToUrl('content.contact.phone1')")
            | {{ $t('content.contact.phone1') }}
          a.o-link.fw-medium.block.c-ship-gray.underline(:href="phoneToUrl('content.contact.phone2')")
            | {{ $t('content.contact.phone2') }}
          SocialLinks
          form
            input.o-input(
              type="text",
              @model="name",
              :placeholder="$t('contact.form.namePlaceholder')",
            )
            input.o-input(
              type="text",
              @model="email",
              :placeholder="$t('contact.form.emailPlaceholder')",
            )
            textarea.o-textarea(
              @model="message",
              :placeholder="$t('contact.form.messagePlaceholder')",
            )
            button.o-btn.o-btn--purple(type="button")
              span.fs-16.c-white {{ $t('contact.form.ctaSend') }}
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      }
    },
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

<style src="./Contact.sass" lang="sass" scoped></style>
