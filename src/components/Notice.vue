<template lang="pug">
article.notice(v-show='notice' @click='close_notice()')
  p Essa web aplicação ainda está em constante desenvolvimento.
</template>

<script>
export default {
  name: 'notice-page',
  data () {
    return {
      notice: true
    }
  },
  methods: {
    close_notice () {
      this.notice = false
    }
  }
}
</script>
<style lang="stylus">
.notice
  background blue
  position fixed
  top 0
  right 0
  width 260px
  padding 20px
  margin 20px
  z-index 999
  border-radius 6px
  box-shadow 0 6px 13px red
  cursor pointer
  opacity .8
  p
    color #fff
</style>
