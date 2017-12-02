<template lang="pug">
  article
    Landing
    WhatWeDo
    WeAreFlexible
    HireUs
</template>

<script>
  import head from 'src/head'
  import HireUs from 'components/HireUs/HireUs'
  import Landing from './Landing/Landing'
  import WhatWeDo from './WhatWeDo/WhatWeDo'
  import WeAreFlexible from './WeAreFlexible/WeAreFlexible'

  export default {
    components: {
      HireUs,
      Landing,
      WhatWeDo,
      WeAreFlexible,
    },
    head: head.set({
      title: () => 'Services',
    }),
  }
</script>
