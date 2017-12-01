<template lang="pug">
  section.hire-us
    .row
      .column.mb-32.large-mb-0
        h1.o-heading-1.hire-us__title {{ $t('workWithUs.title') }}
      .column.small-12.large-6.align-middle.hire-us__buttons
        router-link.o-btn.text-center.hire-us__estimate(:to="{ name: 'Estimate' }")
          span.fs-16 {{ $t('common.estimateProject') }}
        router-link.o-btn.text-center.hire-us__contact(:to="{ name: 'Estimate' }")
          span.fs-16 {{ $t('common.orContactUs') }}
</template>

<style src="./HireUs.sass" lang="sass" scoped></style>
