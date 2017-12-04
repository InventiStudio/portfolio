<template lang="pug">
  section.inventi-and-node.text-center
    .inventi-and-node__content.row.align-center
      .inventi-and-node__title.column.small-12
        h2.o-heading-1.c-white
          span.mr-8 {{ $t('node.inventiAndNode.title') }}
          img.valign-middle(
            src="~assets/icons/icon--rocket.svg",
            :alt="$t('node.inventiAndNode.rocket')",
            :title="$t('node.inventiAndNode.rocket')",
          )
        p.inventi-and-node__desc.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-64 {{ $t('node.inventiAndNode.desc') }}
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--github-2",
          title="node.inventiAndNode.packages.title",
          desc="node.inventiAndNode.packages.desc",
          :cta-to="$t('content.urls.github')",
          cta-text="node.inventiAndNode.packages.cta",
          :contact-us="false",
          color="pink",
        )
      .column.small-12.medium-10.large-4
        Card(
          icon-type="icon--message",
          title="node.inventiAndNode.publications.title",
          desc="node.inventiAndNode.publications.desc",
          :cta-to="$t('content.urls.blog')",
          cta-text="node.inventiAndNode.publications.cta",
          :contact-us="false",
          color="blue",
        )
</template>

<style src="./InventiAndNode.sass" lang="sass" scoped></style>
