<template lang="pug">
  section.contact
    img.contact__map(src="~assets/images/Home/contact__map.svg")
    .row
      h1.o-heading-1.c-white-90 {{ $t('contact.title') }}
      p.o-paragraph.c-white-60 {{ $t('contact.desc') }}
      .small-12.large-6.columns
        .o-card
          SocialLinks
</template>

<style src="./Contact.sass" lang="sass" scoped></style>
