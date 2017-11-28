<template lang="pug">
  section.contact
    img.contact__map(src="~assets/images/Home/contact__map.svg")
    h1.o-heading-1.c-white-90 {{ $t('contact.title') }}
    p.o-paragraph.c-white-60 {{ $t('contact.desc') }}
    - var n = 0;
    while n < 40
      br
      - n++
</template>

<style src="./Contact.sass" lang="sass" scoped></style>
