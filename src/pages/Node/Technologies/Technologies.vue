<template lang="pug">
  section.technologies.text-center
    .technologies__content.row.align-center
      .technologies__title.column.small-12
        h1.o-heading-1.c-ship-gray-80 {{ $t('node.technologies.title') }}
        p.technologies__desc.o-paragraph.c-ship-gray-40.mt-16.medium-mt-4.mb-72 {{ $t('node.technologies.desc') }}
      .technologies__icons.column.small-12
          img(src="~assets/icons-technologies/sequelize.png", :title="$t('content.technologies.sequelize')", :alt="$t('content.technologies.sequelize')")
          img(src="~assets/icons-technologies/koa.png",       :title="$t('content.technologies.koa')",       :alt="$t('content.technologies.koa')")
          img(src="~assets/icons-technologies/js.svg",        :title="$t('content.technologies.js')",        :alt="$t('content.technologies.js')")
          img(src="~assets/icons-technologies/postgres.svg",  :title="$t('content.technologies.postgres')",  :alt="$t('content.technologies.postgres')")
          img(src="~assets/icons-technologies/mongodb.svg",   :title="$t('content.technologies.mongodb')",   :alt="$t('content.technologies.mongodb')")
          img(src="~assets/icons-technologies/eslint.png",    :title="$t('content.technologies.eslint')",    :alt="$t('content.technologies.eslint')")
          img(src="~assets/icons-technologies/docker.png",    :title="$t('content.technologies.docker')",    :alt="$t('content.technologies.docker')")
          img(src="~assets/icons-technologies/babel.png",     :title="$t('content.technologies.babel')",     :alt="$t('content.technologies.babel')")
          img(src="~assets/icons-technologies/node.png",      :title="$t('content.technologies.node')",      :alt="$t('content.technologies.node')")
          img(src="~assets/icons-technologies/npm.png",       :title="$t('content.technologies.npm')",       :alt="$t('content.technologies.npm')")
          img(src="~assets/icons-technologies/yarn.png",      :title="$t('content.technologies.yarn')",      :alt="$t('content.technologies.yarn')")
          img(src="~assets/icons-technologies/karma.png",     :title="$t('content.technologies.karma')",     :alt="$t('content.technologies.karma')")
</template>

<style src="./Technologies.sass" lang="sass" scoped></style>
