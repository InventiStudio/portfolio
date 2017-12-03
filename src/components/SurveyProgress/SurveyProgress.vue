<template lang="pug">
  .survey-progress
    .survey-progress__step(:class="`survey-progress__step--${step}`")
</template>

<script>
  export default {
    props: {
      step: {
        type: Number,
        required: true,
        validator(step) {
          return [1, 2, 3, 4].indexOf(step) !== -1
        },
      },
    },
  }
</script>

<style src="./SurveyProgress.sass" lang="sass" scoped></style>
