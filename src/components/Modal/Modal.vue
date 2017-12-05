<template lang="pug">
  transition(name="modal")
    .modal__mask.small-12.columns(@mousedown.stop="closeModal()", @touchstart.stop="closeModal()")
      .row.expanded.align-center
        .modal__container.small-12.medium-8.large-6.columns.max-w-560(
          @mousedown.stop="",
          @touchstart.stop="",
        )
          icon.modal__icon(type="icon--x", :is-pointer="true", @click="closeModal()")
          slot
</template>

<script>
  import { closeModal } from 'services/events'

  export default {
    methods: {
      closeModal,
      closeModalOnEscKey(e) {
        if (this.isModalOpen && e.keyCode === 27) this.closeModal()
      },
    },
    mounted() {
      window.addEventListener('keydown', this.closeModalOnEscKey)
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.closeModalOnEscKey)
    },
  }
</script>

<style src="./Modal.sass" lang="sass" scoped></style>
