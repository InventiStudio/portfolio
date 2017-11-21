<template lang="pug">
  transition(name="modal")
    .modal__mask.small-12.columns(@click="onCloseModal()")
      .row.expanded.align-center
        .modal__container.small-12.medium-8.large-6.columns
          icon.modal__icon(type="icon--close", :isPointer="true", @click="onCloseModal")
          .row.align-center
            .small-12.medium-10.columns.u--txt-center
              slot
</template>

<script>
  export default {
    props: {
      isModalOpen: {
        type: Boolean,
        required: true,
      },
      onCloseModal: {
        type: Function,
        required: true,
      },
    },
    methods: {
      closeModalOnEscKey(e) {
        if (this.isModalOpen && e.keyCode === 27) this.onCloseModal()
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

<style src="./Modal.sass" lang="sass"></style>
