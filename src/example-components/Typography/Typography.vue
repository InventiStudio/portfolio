<style src="./Typography.sass" lang="sass" scoped></style>

<template lang="pug">
  section
    article.row.align-center.article
      .small-12.medium-10.columns
        h1.c-black.u--txt-center Title 1
        h2.c-black-medium.u--txt-center Title 2
        h3.c-black-medium Title 3
        p.c-black-medium.u--txt-justify.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Suspendisse placerat, est nec faucibus molestie, ex magna mattis massa, ac sodales
          odio libero sed turpis. Nulla facilisi.
    article.row.align-center.article.article--black
      .small-12.medium-10.columns
        h1.c-white.u--txt-center Title 1
        h2.c-white-medium.u--txt-center Title 2
        h3.c-white-medium Title 3
        p.c-white-light.u--txt-justify.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Suspendisse placerat, est nec faucibus molestie, ex magna mattis massa, ac sodales
          odio libero sed turpis. Nulla facilisi.
    article.row.align-center.article.article--primary
      .small-12.medium-10.columns
        h1.c-white.u--txt-center Title 1
        h2.c-white-medium.u--txt-center Title 2
        h3.c-white-medium Title 3
        p.c-white-light.u--txt-justify.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Suspendisse placerat, est nec faucibus molestie, ex magna mattis massa, ac sodales
          odio libero sed turpis. Nulla facilisi.
    article.row.align-center.article
      .small-12.medium-10.columns
        p.typo__large.c-black-medium.
          Leading text. Lorem ipsum dolor sit amet consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        blockquote.c-black-light
          | Lorem ipsum dolor sit amet,
          strong.u--spaced consectetur
          | adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          em.u--spaced minim
          | veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          cite Isaac Asimov
        figure
          img(
            src="//bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png",
            alt="Placeholder image",
          )
          figcaption.c-black-medium.u--txt-center
            small Image caption
        p.c-black-medium.u--txt-justify
          em.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Nulla mollis commodo viverra. Quisque a eros nec augue iaculis elementum at nec magna.
            Nunc cursus leo in gravida vehicula. Mauris commodo, sem vitae cursus dictum, lorem
            sapien dictum mi, eu maximus purus odio ut sapien.
    article.row.align-center.article
      .small-12.medium-10.columns
        h1.c-black-medium.u--txt-center Lists
        h3.c-black-light Unordered list
        section.row
          .small-12.medium-6.columns
            ul.c-black-medium
              li Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              li Aliquam tincidunt mauris eu risus.
              li Vestibulum auctor dapibus neque.
              li Nunc dignissim risus id metus.
          .small-12.medium-6.columns
            ul.c-black-medium.u--no-bullet
              li Vivamus vestibulum nulla nec ante.
              li
                a(href="#") Link no. 1
              li Fusce pellentesque suscipit nibh.
              li Nunc dignissim risus id metus.
        h3.c-black-light Ordered list
        section.row.columns
          ol.c-black-medium
            li Integer vitae libero ac risus egestas placerat.
            li Vestibulum commodo felis quis tortor.
            li Donec quis dui at dolor tempor interdum.
            li Fusce lobortis lorem at ipsum semper sagittis.
</template>
