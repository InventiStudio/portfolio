<style src="./Form.sass" lang="sass" scoped></style>

<template lang="pug">
  section.form__section
    .row.columns
      h1
        small.u--spaced-right
          | 19.
        | Form
    form.row
      fieldset.small-12.columns
        .row.columns
          legend.legend
            | Shipping Information
        .row
          .small-12.large-7.columns
            .row.columns
              label
                | Name
            .row
              .small-12.medium-6.large-12.columns
                input(type="text", placeholder="First name")
              .small-12.medium-6.large-12.columns
                input(type="text", placeholder="Last name")
          .small-12.large-5.columns
            .row.columns
              label
                | Billing address
            .row
              .small-12.medium-9.large-12.columns
                input(type="text", placeholder="Street address")
              .small-12.medium-3.large-12.columns
                input(type="text", placeholder="Apt #")
      hr
      fieldset.small-12.columns
        .row.columns
          legend.legend
            | Billing Information
        .row
          .small-12.large-6.columns
            .row.columns
              label Card type
            .row.columns
              input(type="text", placeholder="Type")
          .small-12.large-6.columns
            .row
              .small-12.medium-6.columns
                label Card number
                input(type="text", placeholder="Card #")
              .small-12.medium-6.columns
                .row.columns
                  label Expiration
                .row
                  .small-6.columns
                    select
                      option(value="January") January
                      option(value="February") February
                      option(value="March") March
                  .small-6.columns
                    input(type="text", placeholder="Year")
        .row
          .small-12.columns
            input(id="checkbox1", type="checkbox")
            label(for="checkbox1") I agree to the Terms and Conditions
          .medium-3.columns
            input(id="radio1", name="radio", type="radio")
            label(for="radio1") Yes, I do
          .medium-3.columns
            input(id="radio2", name="radio", type="radio")
            label(for="radio2") No, I do not
          .small-12.columns
            .row
              .small-12.medium-6.columns
                input(type="number")
                input.button.primary(type="submit", value="Submit")
</template>
