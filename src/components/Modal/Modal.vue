<template lang="pug">
  transition(name="modal")
    .modal__mask.small-12.columns(@click="closeModal()")
      .row.expanded.align-center
        .modal__container.small-12.medium-8.large-6.columns
          icon.modal__icon(type="icon--close", :isPointer="true", @click="closeModal()")
          .row.align-center
            .small-12.medium-10.columns.u--txt-center
              slot
</template>

<script>
  import { closeModal } from 'services/ui'

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
