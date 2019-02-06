<template lang="pug">
  ol.list-reset.text-center
    li.blog-scope(
      v-for="scope in scopes",
      :class="{ 'blog-scope--active': isScopeActive(scope) }",
    )
      router-link.blog-scope__circle(
        :to="$routeByName(capitalizeFirstLetter(scope.name))",
        :class="`blog-scope__circle--${scope.name}`",
      )
        Icon.blog-scope__icon.c-white(:type="scope.icon")
      router-link.blog-scope__text(:to="$routeByName(capitalizeFirstLetter(scope.name))")
        span.fs-16 {{ $t(`${scope.name}.shortTitle`) }}
</template>

<script>
  import TextUtils from 'src/utils/text'

  const scopes = [
    { name: 'vue', icon: 'icon--monitor' },
    { name: 'node', icon: 'icon--server' },
    { name: 'design', icon: 'icon--grid' },
  ]

  export default {
    props: {
      activeScopes: {
        type: Array,
        required: true,
        validator(activeScopes) {
          return activeScopes.every(scope => scopes.map(({ name }) => name).indexOf(scope) > -1)
        },
      },
    },

    methods: {
      ...{
        capitalizeFirstLetter: TextUtils.capitalizeFirstLetter,
      },
      isScopeActive(scope) {
        return this.activeScopes.indexOf(scope.name) > -1
      },
    },

    created() {
      this.scopes = Object.freeze(scopes)
    },
  }
</script>

<style src="./BlogScope.sass" lang="sass" scoped></style>
