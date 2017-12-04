<template lang="pug">
  section.what-we-do.bg-alabaster.text-center
    .row.column
      h2.o-heading-1.c-ship-gray-80 {{ $t('services.whatWeDo.title') }}
      p.o-paragraph.c-ship-gray-40.mb-40 {{ $t('services.whatWeDo.desc') }}
    .row.align-center
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--monitor",
          title="vue.shortTitle",
          desc="vue.desc",
          :cta-to="{ name: 'Vue' }",
          cta-text="services.card.cta",
          :contact-us="true",
          color="green",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--server",
          title="node.shortTitle",
          desc="node.desc",
          :cta-to="{ name: 'Node' }",
          cta-text="services.card.cta",
          :contact-us="true",
          color="blue",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--grid",
          title="design.shortTitle",
          desc="design.desc",
          :cta-to="{ name: 'Design' }",
          cta-text="services.card.cta",
          :contact-us="true",
          color="orange",
        )
</template>

<style src="./WhatWeDo.sass" lang="sass" scoped></style>
