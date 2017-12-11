<template lang="pug">
  article.o-card.o-wave--gray.bg-alabaster.text-center
    h2.o-heading-1.c-ship-gray-80.mb-16 {{ $t('success.title') }}
    p.o-paragraph {{ $t('success.desc') }}
</template>

<script>
  import { closeModal } from 'services/events'

  let successModalTimeout

  export default {
    methods: {
      closeModal,
    },
    async created() {
      successModalTimeout = setTimeout(() => this.closeModal(), 5000)
    },
    beforeDestroy() {
      clearTimeout(successModalTimeout)
    },
  }
</script>
