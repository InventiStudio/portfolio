<template lang="pug">
  section.why-we-chose.text-center
    .why-we-chose__content.row.align-center
      .why-we-chose__title.column.small-12
        h1.o-heading-1.c-ship-gray-80 {{ $t('vue.whyWeChose.title') }}
        p.why-we-chose__desc.o-paragraph.c-ship-gray-40.mt-16.medium-mt-4.mb-64 {{ $t('vue.whyWeChose.desc') }}
    .why-we-chose__list.row.align-center
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--box")
        h3.o-heading-3.c-ship-gray {{ $t('vue.whyWeChose.component.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('vue.whyWeChose.component.desc') }}
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--feather")
        h3.o-heading-3.c-ship-gray {{ $t('vue.whyWeChose.fastSmall.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('vue.whyWeChose.fastSmall.desc') }}
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--maximize-2")
        h3.o-heading-3.c-ship-gray {{ $t('vue.whyWeChose.progressive.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('vue.whyWeChose.progressive.desc') }}
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--globe")
        h3.o-heading-3.c-ship-gray {{ $t('vue.whyWeChose.ecosystem.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('vue.whyWeChose.ecosystem.desc') }}
</template>

<style src="./WhyWeChose.sass" lang="sass" scoped></style>
