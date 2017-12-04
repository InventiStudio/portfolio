<template lang="pug">
  section.qualities.text-center
    .qualities__content.row.align-center
      .qualities__title.column.small-12
        h2.o-heading-1.c-white {{ $t('node.qualities.title') }}
        p.qualities__desc.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-64 {{ $t('node.qualities.desc') }}
    .qualities__list.row.align-center
      .qualities__element.column.small-12.medium-6.large-3.mb-32
        icon.c-white-50.mt-8(type="icon--lock")
        h3.o-heading-3.c-white-90 {{ $t('node.qualities.security.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('node.qualities.security.desc') }}
      .qualities__element.column.small-12.medium-6.large-3.mb-32
        icon.c-white-50.mt-8(type="icon--trending-up")
        h3.o-heading-3.c-white-90 {{ $t('node.qualities.code.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('node.qualities.code.desc') }}
      .qualities__element.column.small-12.medium-6.large-3.mb-32
        icon.c-white-50.mt-8(type="icon--shield")
        h3.o-heading-3.c-white-90 {{ $t('node.qualities.tests.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('node.qualities.tests.desc') }}
      .qualities__element.column.small-12.medium-6.large-3.mb-32
        icon.c-white-50.mt-8(type="icon--cpu")
        h3.o-heading-3.c-white-90 {{ $t('node.qualities.technologies.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('node.qualities.technologies.desc') }}
</template>

<style src="./Qualities.sass" lang="sass" scoped></style>
