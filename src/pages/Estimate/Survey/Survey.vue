<template lang="pug">
  section.survey
    form
      h1.o-heading-1.c-ship-gray-80 {{ $t('estimate.survey.q1.title') }}
      span.o-heading-1.c-ship-gray-20 1/4
      SurveyProgress(:step="1")
      h1.o-heading-1.c-ship-gray-80 {{ $t('estimate.survey.q2.title') }}
      span.o-heading-1.c-ship-gray-20 2/4
      SurveyProgress(:step="2")
      h1.o-heading-1.c-ship-gray-80 {{ $t('estimate.survey.q3.title') }}
      span.o-heading-1.c-ship-gray-20 3/4
      SurveyProgress(:step="3")
      h1.o-heading-1.c-ship-gray-80 {{ $t('estimate.survey.q4.title') }}
      span.o-heading-1.c-ship-gray-20 4/4
      SurveyProgress(:step="4")
</template>

<script>
  import SurveyProgress from 'components/SurveyProgress/SurveyProgress'

  export default {
    components: {
      SurveyProgress,
    },
  }
</script>

<style src="./Survey.sass" lang="sass" scoped></style>
