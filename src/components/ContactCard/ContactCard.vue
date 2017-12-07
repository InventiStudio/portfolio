<template lang="pug">
  article.o-card.o-wave--gray.bg-alabaster.text-center
    h2.o-heading-1.c-ship-gray-80.mb-16 {{ $t('contact.title') }}
    a.o-link.fw-medium.block.c-purple.underline(:href="mailToUrl('content.contact.emailAddress')")
      | {{ $t('content.contact.emailAddress') }}
    a.o-link.fw-medium.block.c-ship-gray.underline(:href="phoneToUrl('content.contact.phone1')")
      | {{ $t('content.contact.phone1') }}
    a.o-link.fw-medium.block.c-ship-gray.underline(:href="phoneToUrl('content.contact.phone2')")
      | {{ $t('content.contact.phone2') }}
    SocialLinks.mt-32
    form.max-w-370.mt-48
      input.o-input(
        type="text",
        v-model="name",
        :placeholder="$t('contact.form.namePlaceholder')",
        :class="{ 'o-input--error': !isNameValid }",
      )
      small.o-form-error
        span(v-show="!isNameValid") {{ $t('errors.name') }}
      input.o-input.mt-4(
        type="text",
        v-model="email",
        :placeholder="$t('contact.form.emailPlaceholder')",
        :class="{ 'o-input--error': !isEmailValid }",
      )
      small.o-form-error
        span(v-show="!isEmailValid") {{ $t('errors.email') }}
      textarea.o-textarea.mt-4(
        v-model="message",
        :placeholder="$t('contact.form.messagePlaceholder')",
        :class="{ 'o-input--error': !isMessageValid }",
      )
      small.o-form-error
        span(v-show="!isMessageValid") {{ $t('errors.message') }}
      button.o-btn.o-btn--purple.mt-24(
        type="button",
        :disabled="!isFormValid",
        @click="submit()",
      )
        h3.m-0.fw-regular.fs-16.c-white {{ $t('contact.form.ctaSend') }}
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import SocialLinks from 'components/SocialLinks/SocialLinks'

  export default {
    components: {
      SocialLinks,
    },
    data() {
      return {
        name: '',
        email: '',
        message: '',
      }
    },
    computed: {
      isNameValid() { return !this.$v.name.$error },
      isEmailValid() { return !this.$v.email.$error },
      isMessageValid() { return !this.$v.message.$error },
      isFormValid() {
        return this.isNameValid && this.isEmailValid && this.isMessageValid
      },
    },
    methods: {
      mailToUrl(mail) {
        return `mailto:${this.$t(mail)}`
      },
      phoneToUrl(phone) {
        return `tel:${this.$t(phone)}`.replace(/\s/g, '')
      },
      submit() {
        try {
          if (this.$v.contactForm.$touch() || this.$v.contactForm.$error) return null
          const { name, email, message } = this
          return { name, email, message }
        } catch (err) {
          console.warn(err)
          throw err
        }
      },
    },
    validations: {
      name: { required },
      email: { required, email },
      message: { required },
      contactForm: [
        'name',
        'email',
        'message',
      ],
    },
  }
</script>