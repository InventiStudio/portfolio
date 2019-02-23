<template lang="pug">
  .projects
    .projects__landing
      .row.column
        h1.o-heading-1.c-white {{ $t('projects.title') }}
        p.o-paragraph.c-white-60.mt-16.medium-mt-4.mb-40 {{ $t('projects.desc') }}
    .projects__projects
      .row.column.align-center
        BlogCard.projects__project(
          v-for="(project, index) in $root.projects",
          :key="project.data.slug",
          :title="project.data.title",
          :description="project.data.description",
          :date="project.additional.formattedDate",
          :cover-url="`url(${project.additional.coverFullUrl})`",
          :slug="project.data.slug",
          :color="project.data.color",
          :triangle-direction="index % 2 === 0 ? 'right' : 'left'",
          :is-dark="true",
        )
    HireUs.hire-us--dark
</template>

<script>
  import head from 'src/head'
  import BlogCard from 'components/BlogCard/BlogCard'
  import HireUs from 'components/HireUs/HireUs'

  export default {
    head: head.set({
      title() {
        return this.$t('projects.title')
      },
      description() {
        return this.$t('projects.desc')
      },
      breadcrumb() {
        return [
          { name: this.$t('home.title'), route: this.$router.resolve(this.$routeByName('Home')) },
          { name: this.$t('projects.title'), route: this.$router.resolve(this.$routeByName('Projects')) },
        ]
      },
    }),

    components: {
      BlogCard,
      HireUs,
    },
  }
</script>

<style src="./Projects.sass" lang="sass" scoped></style>
