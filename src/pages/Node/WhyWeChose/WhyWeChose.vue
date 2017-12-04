<template lang="pug">
  section.why-we-chose.text-center
    .why-we-chose__content.row.align-center
      .why-we-chose__title.column.small-12
        h2.o-heading-1.c-ship-gray-80 {{ $t('node.whyWeChose.title') }}
        p.why-we-chose__desc.o-paragraph.c-ship-gray-40.mt-16.medium-mt-4.mb-64 {{ $t('node.whyWeChose.desc') }}
    .why-we-chose__list.row.align-center
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--globe")
        h3.o-heading-3.c-ship-gray {{ $t('node.whyWeChose.ecosystem.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('node.whyWeChose.ecosystem.desc') }}
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--watch")
        h3.o-heading-3.c-ship-gray {{ $t('node.whyWeChose.async.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('node.whyWeChose.async.desc') }}
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--box")
        h3.o-heading-3.c-ship-gray {{ $t('node.whyWeChose.modularity.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('node.whyWeChose.modularity.desc') }}
      .why-we-chose__element.column.small-12.medium-6.large-3.mb-32
        icon.c-ship-gray-20.mt-8(type="icon--repeat")
        h3.o-heading-3.c-ship-gray {{ $t('node.whyWeChose.javascript.title') }}
        p.o-paragraph.c-ship-gray-40.mt-4 {{ $t('node.whyWeChose.javascript.desc') }}
</template>

<style src="./WhyWeChose.sass" lang="sass" scoped></style>
