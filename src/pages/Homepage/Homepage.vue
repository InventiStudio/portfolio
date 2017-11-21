<template lang="pug">
  article
    h1 Hello world!
</template>

<script>
  import head from 'src/head'

  export default {
    head: head.set({
      title: () => 'home_title',
    }),
  };
</script>
