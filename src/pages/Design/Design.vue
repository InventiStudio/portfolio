<template lang="pug">
  .design
    .design__landing
      Landing
    article.design__responsiveness
      .row.align-center.design__section.design__section--reverse
        .column.small-12.medium-4.large-4.small-only-text-center.small-mb-32.medium-m-0.align-self-middle.text-right
          img.design__image.valign-middle(src="~assets/images/Design/responsiveness__image.svg", :alt="$t('design.responsiveness.image')")
        .column.small-12.medium-8.large-6
          h2.o-heading-1.small-only-text-center.c-ship-gray-80 {{ $t('design.responsiveness.title') }}
          p.tools__desc.o-paragraph.c-ship-gray-40.small-only-text-center.text-justify.mt-16.medium-mt-8 {{ $t('design.responsiveness.desc') }}
    article.design__typography
      .row.align-center.design__section
        .column.small-12.medium-4.large-4.small-only-text-center.small-mb-32.medium-m-0.align-self-middle
          img.design__image.valign-middle(src="~assets/images/Design/typography__image.svg",  :alt="$t('design.responsiveness.image')")
        .column.small-12.medium-8.large-6
          h2.o-heading-1.small-only-text-center.text-right.c-white {{ $t('design.typography.title') }}
          p.tools__desc.o-paragraph.c-white-60.small-only-text-center.text-justify.mt-16.medium-mt-8 {{ $t('design.typography.desc') }}
    article.design__semantics
      .row.align-center.design__section.design__section--reverse
        .column.small-12.medium-4.large-4.small-only-text-center.small-mb-32.medium-m-0.align-self-middle.text-right
          img.design__image.valign-middle(src="~assets/images/Design/semantics__image.svg", :alt="$t('design.semantics.image')")
        .column.small-12.medium-8.large-6
          h2.o-heading-1.small-only-text-center.c-ship-gray-80 {{ $t('design.semantics.title') }}
          p.tools__desc.o-paragraph.c-ship-gray-40.small-only-text-center.text-justify.mt-16.medium-mt-8 {{ $t('design.semantics.desc') }}
    article.design__rhythm
      .row.align-center.design__section
        .column.small-12.medium-4.large-4.small-only-text-center.small-mb-32.medium-m-0.align-self-middle
          img.design__image.valign-middle(src="~assets/images/Design/rhythm__image.svg",  :alt="$t('design.rhythm.image')")
        .column.small-12.medium-8.large-6
          h2.o-heading-1.small-only-text-center.text-right.c-white {{ $t('design.rhythm.title') }}
          p.tools__desc.o-paragraph.c-white-60.small-only-text-center.text-justify.mt-16.medium-mt-8 {{ $t('design.rhythm.desc') }}
    .design__tools
      Tools
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import Tools from './Tools/Tools'

  export default {
    components: {
      Landing,
      Tools,
      HireUs,
    },
    head: head.set({
      title() {
        return this.$t('design.title')
      },
      description() {
        return this.$t('design.desc')
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'),     route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('services.title'), route: this.$router.resolve(this.$routeByName('Services')) },
          { name: this.$t('design.title'),   route: this.$router.resolve(this.$routeByName('Design')) },
        ]
      },
    }),
  }
</script>

<style src="./Design.sass" lang="sass" scoped></style>
