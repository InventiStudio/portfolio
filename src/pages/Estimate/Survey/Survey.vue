<template lang="pug">
  section.survey
    form.row.align-center
      fieldset.column.small-12.large-9.mb-64.medium-mb-80
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.questionStart.title') }}
          span.o-heading-1.c-ship-gray-20 1/4
        SurveyProgress.mb-32(:step="1")
        .row
          .column.small-12.medium-4
            CardInput(
              type="radio",
              icon="icon--play",
              v-model="questionStart",
              name="questionStart",
              value="answerNew",
            ) {{ $t('estimate.survey.questionStart.answers.answerNew') }}
          .column.small-12.medium-4
            CardInput(
              type="radio",
              icon="icon--fast-forward",
              v-model="questionStart",
              name="questionStart",
              value="answerContinue",
            ) {{ $t('estimate.survey.questionStart.answers.answerContinue') }}
      fieldset.column.small-12.large-9.mb-64.medium-mb-80
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.questionScope.title') }}
          span.o-heading-1.c-ship-gray-20 2/4
        SurveyProgress.mb-32(:step="2")
        .row
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--monitor", v-model="questionScope.answerFrontEnd")
              | {{ $t('estimate.survey.questionScope.answers.answerFrontEnd') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--server", v-model="questionScope.answerBackEnd")
              | {{ $t('estimate.survey.questionScope.answers.answerBackEnd') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--grid", v-model="questionScope.answerDesign")
              | {{ $t('estimate.survey.questionScope.answers.answerDesign') }}

      fieldset.column.small-12.large-9.mb-64.medium-mb-80
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.questionPlatform.title') }}
          span.o-heading-1.c-ship-gray-20 3/4
        SurveyProgress.mb-32(:step="3")
        .row
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--monitor", v-model="questionPlatform.answerDesktop")
              | {{ $t('estimate.survey.questionPlatform.answers.answerDesktop') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--smartphone", v-model="questionPlatform.answerMobile")
              | {{ $t('estimate.survey.questionPlatform.answers.answerMobile') }}
          .column.small-12.medium-4
            CardInput(type="checkbox", icon="icon--file", v-model="questionPlatform.answerOther")
              | {{ $t('estimate.survey.questionPlatform.answers.answerOther') }}
      fieldset.column.small-12.large-9
        header.survey__header.mb-16
          h2.o-heading-1.c-ship-gray-80.pr-8 {{ $t('estimate.survey.questionDetails.title') }}
          span.o-heading-1.c-ship-gray-20 4/4
        SurveyProgress(:step="4").mb-32
        .row
          .column.small-12.medium-4
            input.o-input(
              type="text",
              v-model="name",
              :placeholder="$t('estimate.survey.questionDetails.form.namePlaceholder')",
              :class="{ 'o-input--error': !isNameValid }",
            )
            small.o-form-error.survey__error
              span(v-show="!isEmailValid") {{ $t('errors.name') }}
          .column.small-12.medium-4
            input.o-input(
              type="text",
              v-model="email",
              :placeholder="$t('estimate.survey.questionDetails.form.emailPlaceholder')",
              :class="{ 'o-input--error': !isEmailValid }",
            )
            small.o-form-error.survey__error
              span(v-show="!isEmailValid") {{ $t('errors.email') }}
          .column.small-12.medium-4.mb-16
            input.o-input(
              type="text",
              v-model="phone",
              :placeholder="$t('estimate.survey.questionDetails.form.phonePlaceholder')",
            )
          .column.small-12.mt-4
            textarea.o-textarea(
              v-model="message",
              :placeholder="$t('estimate.survey.questionDetails.form.messagePlaceholder')",
              :class="{ 'o-input--error': !isMessageValid }",
            )
            small.o-form-error.survey__error
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
  import { openSuccessModal } from 'services/events'
  import sendMail from 'services/mailer'

  export default {
    components: {
      CardInput,
      SurveyProgress,
    },
    data() {
      return {
        questionStart: '',
        questionScope: {
          answerFrontEnd: false,
          answerBackEnd: false,
          answerDesign: false,
        },
        questionPlatform: {
          answerDesktop: false,
          answerMobile: false,
          answerOther: false,
        },
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    },
    computed: {
      locale() { return this.$i18n.locale },
      isNameValid() { return !this.$v.name.$error },
      isEmailValid() { return !this.$v.email.$error },
      isMessageValid() { return !this.$v.message.$error },
      isFormValid() { return this.isNameValid && this.isEmailValid && this.isMessageValid },
      estimationScope() { return this.$root.$children[0].estimationScope },
    },
    methods: {
      openSuccessModal,
      async submit() {
        try {
          if (this.$v.surveyForm.$touch() || this.$v.surveyForm.$error) return null
          const { name, email, phone, message } = this
          const { questionStart, questionScope, questionPlatform } = this
          const survey = { questionStart, questionScope, questionPlatform }
          await sendMail({
            template_id: 'estimate-from-client',
            email: 'hello@inventi.studio',
            substitution_data: { name, email, phone, message, survey },
          })
          await sendMail({
            template_id: `estimate-to-client-${this.locale}`,
            email,
            name,
            substitution_data: { name, email, message, survey },
          })
          this.openSuccessModal()
        } catch (err) {
          console.warn({ err })
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
    watch: {
      estimationScope(estimationScope) {
        if (estimationScope === 'front-end') this.questionScope.answerFrontEnd = true
        if (estimationScope === 'back-end') this.questionScope.answerBackEnd = true
        if (estimationScope === 'design') this.questionScope.answerDesign = true
      },
    },
  }
</script>

<style src="./Survey.sass" lang="sass" scoped></style>
