<template lang="pug">
  section.qualities.text-center
    .qualities__content.row.align-center
      .qualities__title.column.small-12
        h2.o-heading-1.c-white {{ $t('vue.qualities.title') }}
        p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-64.max-w-560 {{ $t('vue.qualities.desc') }}
    .qualities__list.row.align-center
      .qualities__element.column.small-12.medium-6.large-3.mb-48
        icon.c-white-50(type="icon--trending-up")
        h3.o-heading-3.c-white-90 {{ $t('vue.qualities.code.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('vue.qualities.code.desc') }}
      .qualities__element.column.small-12.medium-6.large-3.mb-48
        icon.c-white-50(type="icon--shield")
        h3.o-heading-3.c-white-90 {{ $t('vue.qualities.tests.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('vue.qualities.tests.desc') }}
      .qualities__element.column.small-12.medium-6.large-3.mb-48
        icon.c-white-50(type="icon--smartphone")
        h3.o-heading-3.c-white-90 {{ $t('vue.qualities.responsiveness.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('vue.qualities.responsiveness.desc') }}
      .qualities__element.column.small-12.medium-6.large-3.mb-48
        icon.c-white-50(type="icon--cpu")
        h3.o-heading-3.c-white-90 {{ $t('vue.qualities.technologies.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('vue.qualities.technologies.desc') }}
</template>

<style src="./Qualities.sass" lang="sass" scoped></style>
