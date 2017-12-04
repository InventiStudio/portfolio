<template lang="pug">
  section.technologies.text-center
    .technologies__content.row.align-center
      .technologies__title.column.small-12
        h2.o-heading-1.c-ship-gray-80 {{ $t('vue.technologies.title') }}
        p.technologies__desc.o-paragraph.c-ship-gray-40.mt-16.medium-mt-4.mb-72 {{ $t('vue.technologies.desc') }}
      .technologies__icons.column.small-12
          img(src="~assets/icons-technologies/html5.svg",     :title="$t('content.technologies.html5')",     :alt="$t('content.technologies.html5')")
          img(src="~assets/icons-technologies/css3.svg",      :title="$t('content.technologies.css3')",      :alt="$t('content.technologies.css3')")
          img(src="~assets/icons-technologies/js.svg",        :title="$t('content.technologies.js')",        :alt="$t('content.technologies.js')")
          img(src="~assets/icons-technologies/vue.svg",       :title="$t('content.technologies.vue')",       :alt="$t('content.technologies.vue')")
          img(src="~assets/icons-technologies/sass.png",      :title="$t('content.technologies.sass')",      :alt="$t('content.technologies.sass')")
          img(src="~assets/icons-technologies/webpack.svg",   :title="$t('content.technologies.webpack')",   :alt="$t('content.technologies.webpack')")
          img(src="~assets/icons-technologies/bootstrap.png", :title="$t('content.technologies.bootstrap')", :alt="$t('content.technologies.bootstrap')")
          img(src="~assets/icons-technologies/babel.png",     :title="$t('content.technologies.babel')",     :alt="$t('content.technologies.babel')")
          img(src="~assets/icons-technologies/node.png",      :title="$t('content.technologies.node')",      :alt="$t('content.technologies.node')")
          img(src="~assets/icons-technologies/npm.png",       :title="$t('content.technologies.npm')",       :alt="$t('content.technologies.npm')")
          img(src="~assets/icons-technologies/yarn.png",      :title="$t('content.technologies.yarn')",      :alt="$t('content.technologies.yarn')")
          img(src="~assets/icons-technologies/karma.png",     :title="$t('content.technologies.karma')",     :alt="$t('content.technologies.karma')")
          img(src="~assets/icons-technologies/docker.png",    :title="$t('content.technologies.docker')",    :alt="$t('content.technologies.docker')")
          img(src="~assets/icons-technologies/ramda.png",     :title="$t('content.technologies.ramda')",     :alt="$t('content.technologies.ramda')")
          img(src="~assets/icons-technologies/pug.png",       :title="$t('content.technologies.pug')",       :alt="$t('content.technologies.pug')")
          img(src="~assets/icons-technologies/ngnix.png",     :title="$t('content.technologies.ngnix')",     :alt="$t('content.technologies.ngnix')")
          img(src="~assets/icons-technologies/eslint.png",    :title="$t('content.technologies.eslint')",    :alt="$t('content.technologies.eslint')")
          img(src="~assets/icons-technologies/bulma.png",     :title="$t('content.technologies.bulma')",     :alt="$t('content.technologies.bulma')")
</template>

<style src="./Technologies.sass" lang="sass" scoped></style>
