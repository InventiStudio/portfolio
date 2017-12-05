<template lang="pug">
  section.survey
    form.row.align-center
      fieldset.column.small-12.large-9.mb-64.medium-mb-80
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.q1.title') }}
          span.o-heading-1.c-ship-gray-20 1/4
        SurveyProgress.mb-32(:step="1")
        .row
          .column.small-12.medium-4
            CardInput(type="radio", icon="icon--play", v-model="q1", name="q1", value="a1")
              | {{ $t('estimate.survey.q1.answers.a1') }}
          .column.small-12.medium-4
            CardInput(type="radio", icon="icon--fast-forward", v-model="q1", name="q1", value="a2")
              | {{ $t('estimate.survey.q1.answers.a2') }}
      fieldset.column.small-12.large-9.mb-64.medium-mb-80
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.q2.title') }}
          span.o-heading-1.c-ship-gray-20 2/4
        SurveyProgress.mb-32(:step="2")
        .row
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--monitor", v-model="q2.a1")
              | {{ $t('estimate.survey.q2.answers.a1') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--server", v-model="q2.a2")
              | {{ $t('estimate.survey.q2.answers.a2') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--grid", v-model="q2.a3")
              | {{ $t('estimate.survey.q2.answers.a3') }}

      fieldset.column.small-12.large-9.mb-64.medium-mb-80
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.q3.title') }}
          span.o-heading-1.c-ship-gray-20 3/4
        SurveyProgress.mb-32(:step="3")
        .row
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--monitor", v-model="q3.a1")
              | {{ $t('estimate.survey.q3.answers.a1') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--smartphone", v-model="q3.a2")
              | {{ $t('estimate.survey.q3.answers.a2') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--file", v-model="q3.a3")
              | {{ $t('estimate.survey.q3.answers.a3') }}
      fieldset.column.small-12.large-9
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.q4.title') }}
          span.o-heading-1.c-ship-gray-20 4/4
        SurveyProgress(:step="4").mb-32
        .row
          .column.small-12.medium-4
            input.o-input(
              type="text",
              v-model="name",
              :placeholder="$t('estimate.survey.q4.form.namePlaceholder')",
              :class="{ 'o-input--error': !isNameValid }",
            )
            small.o-form-error
              span(v-show="!isEmailValid") {{ $t('errors.name') }}
          .column.small-12.medium-4
            input.o-input(
              type="text",
              v-model="email",
              :placeholder="$t('estimate.survey.q4.form.emailPlaceholder')",
              :class="{ 'o-input--error': !isEmailValid }",
            )
            small.o-form-error
              span(v-show="!isEmailValid") {{ $t('errors.email') }}
          .column.small-12.medium-4.mb-16
            input.o-input(
              type="text",
              v-model="phone",
              :placeholder="$t('estimate.survey.q4.form.phonePlaceholder')",
            )
          .column.small-12.mt-4
            textarea.o-textarea(
              v-model="message",
              :placeholder="$t('estimate.survey.q4.form.messagePlaceholder')",
              :class="{ 'o-input--error': !isMessageValid }",
            )
            small.o-form-error
              span(v-show="!isMessageValid") {{ $t('errors.message') }}
          .column.small-12.mt-24.large-mt-48.mb-24.text-center
            button.survey__btn.o-btn(
              type="button",
              :disabled="!isFormValid",
              @click="submit()",
            )
              span.fs-16.c-white {{ $t('estimate.survey.ctaSend') }}
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import SurveyProgress from 'components/SurveyProgress/SurveyProgress'
  import CardInput from 'components/CardInput/CardInput'

  export default {
    components: {
      CardInput,
      SurveyProgress,
    },
    data() {
      return {
        q1: '',
        q2: {
          a1: false,
          a2: false,
          a3: false,
        },
        q3: {
          a1: false,
          a2: false,
          a3: false,
        },
        name: '',
        email: '',
        phone: '',
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
      submit() {
        try {
          if (this.$v.surveyForm.$touch() || this.$v.surveyForm.$error) return null
          const { name, email, phone, message } = this
          return { name, email, phone, message }
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
      surveyForm: [
        'name',
        'email',
        'message',
      ],
    },
  }
</script>

<style src="./Survey.sass" lang="sass" scoped></style>
