<template lang="pug">
  article.services
    Landing
    WhatWeDo
    section.services__flexible
      - var n = 0;
      while n < 40
        br
        - n++
    section.services__hire-us: HireUs
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import WhatWeDo from './WhatWeDo/WhatWeDo'

  export default {
    components: {
      HireUs,
      Landing,
      WhatWeDo,
    },
    head: head.set({
      title: () => 'Services',
    }),
  }
</script>

<style src="./Services.sass" lang="sass" scoped></style>
