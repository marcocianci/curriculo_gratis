<template lang="pug">
ul.actions.display-n-print
  li.action-i
    button(v-on:click="print" v-bind:class="{ active: printPrewiew }")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
        path(d="M10 24h10v2H10v-2zM8 2h16v4h2V2c0-1.103-.896-2-2-2H8C6.896 0 6 .896 6 2v4h2V2zm2 18h12v2H10v-2z")
        path(d="M30 8H2c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h4v6c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2v-6h4c1.104 0 2-.895 2-2V10c0-1.104-.897-2-2-2zm-6 22H8V18h16v12zm4-16c-1.104 0-2-.895-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.897 2-2 2z")
      | Printer
  li.action-i
    button(v-on:click="shared")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90")
        path(d="M65 60c-3.436 0-6.592 1.168-9.12 3.112L29.782 47.455c.13-.8.217-1.618.217-2.455 0-.84-.087-1.654-.218-2.456L55.88 26.887C58.407 28.833 61.563 30 65 30c8.283 0 15-6.717 15-15S73.283 0 65 0 50 6.717 50 15c0 .837.086 1.654.22 2.455L24.122 33.112C21.592 31.168 18.438 30 15 30 6.717 30 0 36.717 0 45s6.717 15 15 15c3.438 0 6.594-1.167 9.123-3.113L50.22 72.544C50.085 73.346 50 74.16 50 75c0 8.283 6.717 15 15 15s15-6.717 15-15-6.717-15-15-15z")
      | Shared
  li.action-i
    button(v-on:click="download")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
        path(d="M16 20l-8-8h4V0h8v12h4l-8 8zm11-10h-2.236l5 10H24l-4 6h-8l-4-6H2.236l5-10H5L0 20v12h32V20l-5-10z")
      | Download
</template>

<script>
export default {
  name: 'action-menu',
  data () {
    return {
      printPrewiew: false
    }
  },
  methods: {
    print: () => {
      console.log('Clickou para imprimir!')
      // printPrewiew = true
      window.print()
    },
    shared: () => {
      console.log('Clickou para compartilhar!')
      alert('Ainda esta em desenvolvimento...')
    },
    download: () => {
      console.log('Clickou para fazer o download!')
      alert('Ainda esta em desenvolvimento...')
    }
  }
}
</script>
