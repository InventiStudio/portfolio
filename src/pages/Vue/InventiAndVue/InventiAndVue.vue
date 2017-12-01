<template lang="pug">
  section.inventi-and-vue.text-center
    .inventi-and-vue__content.row.align-center
      .inventi-and-vue__title.column.small-12
        h1.o-heading-1.c-white
          span.mr-8 {{ $t('vue.inventiAndVue.title') }}
          icon.valign-middle(type="icon--rocket")
        p.inventi-and-vue__desc.o-paragraph.c-white-60.mt-4.small-mb-32.medium-mb-64 {{ $t('vue.inventiAndVue.desc') }}
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--github-2",
          title="vue.inventiAndVue.libraries.title",
          desc="vue.inventiAndVue.libraries.desc",
          :cta-to="$t('content.urls.github')",
          cta-text="vue.inventiAndVue.libraries.cta",
          :contact-us="false",
          color="pink",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--unlock",
          title="vue.inventiAndVue.website.title",
          desc="vue.inventiAndVue.website.desc",
          :cta-to="$t('content.urls.repository')",
          cta-text="vue.inventiAndVue.website.cta",
          :contact-us="false",
          color="green",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--message",
          title="vue.inventiAndVue.publications.title",
          desc="vue.inventiAndVue.publications.desc",
          :cta-to="$t('content.urls.blog')",
          cta-text="vue.inventiAndVue.publications.cta",
          :contact-us="false",
          color="blue",
        )
</template>

<style src="./InventiAndVue.sass" lang="sass" scoped></style>
