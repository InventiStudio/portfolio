<template lang="pug">
  section.contact
    img.contact__map(src="~assets/images/Home/contact__map.svg", :alt="$t('contact.map')")
    .contact__content.row
      .small-12.large-6.columns
        ContactCard.contact__card
</template>

<script>
  import ContactCard from 'components/ContactCard/ContactCard'

  export default {
    components: {
      ContactCard,
    },
  }
</script>

<style src="./Contact.sass" lang="sass" scoped></style>
