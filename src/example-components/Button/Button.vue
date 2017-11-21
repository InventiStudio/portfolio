<style src="./Button.sass" lang="sass" scoped></style>

<template lang="pug">
  section
    .row.columns
      h1
        small.u--spaced-right 01.
        | Button
    .row.columns
      hr
    article.row
      .small-12.columns
        section.row
          .small-12.medium-10.columns
            h3 Basic buttons
            button.button(type="button") Add item
            button.button.secondary(type="button") Secondary
            button.button.success(type="button") Save
            button.button.error(type="button") Delete
            button.button(type="button", disabled="") Disabled
        section.row
          .small-12.medium-10.columns
            h3 Hollow style
            button.button-hollow(type="button") Primary
            button.button-hollow.secondary(type="button") Secondary
            button.button-hollow.success(type="button") Success
            button.button-hollow.error(type="button") Alert
            button.button-hollow(type="button", disabled="") Disabled
        section.row
          .small-6.medium-4.columns
            h3 Full width
            button.button.button--full(type="button") Full width
</template>
