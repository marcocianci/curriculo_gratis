<template lang="pug">
nav.menu-list.animate_intro
  ul
    li(v-for='(item, key, index) in nav')
      router-link.menu-item(:to="'/' + item.link") {{ item.title }}
</template>

<script>
export default {
  name: 'nav-menu',
  data () {
    return {
      msg: 'Nav',
      nav: [
        {
          title: 'Informações',
          link: 'about'
        },
        {
          title: 'Versão 2',
          link: 'v2'
        },
        {
          title: 'Doações',
          link: 'donate'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.menu-list
  text-align center
  display block
  clear both
  position relative
  width 100%
  margin 0 auto
  ul
    display inline-block
    text-align center
    &:after
      content ''
      display table
      clear both
  li
    display inline-block
    padding 0 10px
    box-sizing border-box
  .menu-item
    border-radius 6px
    padding 10px 20px
    background rgba(#fff,.2)
    box-sizing border-box
    transition .5s all
    position relative
    display block
    &:hover
      transform scale(1.2)
    &:hover,
    &.router-link-active
      background rgba(#fff,.6)
      color #333
    &:active
      transform scale(1)

</style>
