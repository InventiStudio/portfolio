<template lang="pug">
  .card-input
    input.card-input__input(
      v-if="type === 'radio'",
      type="radio",
      :value="innerValue",
      :id="id",
      @change="update",
      v-bind="$attrs",
    )
    input.card-input__input(
      v-if="type === 'checkbox'",
      type="checkbox",
      v-model="innerValue",
      :checked="innerValue",
      :id="id",
      @change="update",
      v-bind="$attrs",
    )
    label.card-input__label.o-card.mb-24.medium-mb-0(:for="id")
      .row.align-middle
        .column.small-4.medium-12.medium-mb-24
          icon.card-input__icon(:type="icon")
        .column.small-8.medium-12.text-left.medium-text-center
          h3.card-input__heading-3.o-heading-3
            slot
</template>

<script>
  export default {
    props: {
      type:  String,
      value: [Boolean, String, Number, Object, Array],
      icon:  String,
    },
    data() {
      return {
        innerValue: this.value,
      }
    },
    computed: {
      id() {
        return `input-${this._uid}`
      },
    },
    methods: {
      update() {
        this.$emit('input', this.$attrs.value || this.innerValue)
      },
    },
    watch: {
      value(value) {
        this.innerValue = value
      },
    },
  }
</script>

<style src="./CardInput.sass" lang="sass" scoped></style>

