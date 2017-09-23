<template lang="pug">
  #app
    header-page
    nav-menu
    router-view
    notice-page
    publicidade-page
    footer-page
</template>

<script>
  export default { name: 'app' }
</script>

<style lang="stylus">
  @import 'stylus/all'

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
</style>
