<template lang="pug">
  section.tools.text-center
    .tools__content.row.align-center
      .tools__title.column.small-12
        h1.o-heading-1.c-ship-gray-80 {{ $t('design.tools.title') }}
        p.tools__desc.o-paragraph.c-ship-gray-40.mt-16.medium-mt-4.mb-72 {{ $t('design.tools.desc') }}
      .tools__icons.column.small-12
          img(src="~assets/icons-technologies/sketch.svg",    :title="$t('content.technologies.sketch')",    :alt="$t('content.technologies.sketch')")
          img(src="~assets/icons-technologies/photoshop.svg", :title="$t('content.technologies.photoshop')", :alt="$t('content.technologies.photoshop')")
          img(src="~assets/icons-technologies/marvel.svg",    :title="$t('content.technologies.marvel')",    :alt="$t('content.technologies.marvel')")
</template>

<style src="./Tools.sass" lang="sass" scoped></style>
