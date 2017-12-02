<template lang="pug">
  section.we-are-flexible.text-center
    .row.column
      h1.o-heading-1.c-white {{ $t('services.flexible.title') }}
      p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-64.max-w-560 {{ $t('services.flexible.desc') }}
    ul.row.align-center.list-reset
      li.column.small-12.large-3
        icon.c-white-50(type="icon--briefcase")
        h3.o-heading-3.c-white-90 {{ $t('services.flexible.technology.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('services.flexible.technology.desc') }}
      li.column.small-12.large-3
        icon.c-white-50(type="icon--settings")
        h3.o-heading-3.c-white-90 {{ $t('services.flexible.subcontractor.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('services.flexible.subcontractor.desc') }}
      li.column.small-12.large-3
        icon.c-white-50(type="icon--fast-forward")
        h3.o-heading-3.c-white-90 {{ $t('services.flexible.project.title') }}
        p.o-paragraph.c-white-60.mt-4 {{ $t('services.flexible.project.desc') }}
</template>

<style src="./WeAreFlexible.sass" lang="sass" scoped></style>
