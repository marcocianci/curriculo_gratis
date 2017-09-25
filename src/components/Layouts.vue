<template lang="pug">
  .center
    article#theme_lucaslimax.layout(v-for="(item, key, index) in layouts"
                                    v-bind:class="{ active: item.isActive }"
                                    @click.prevent="selectLayout(key)")
      h2 {{ item.name }}
      picture
        svg(xmlns="http://www.w3.org/2000/svg" height="160" viewBox="0 0 100 100" fill='#ccc')
          circle(cx="80" cy="10" r="6")
          rect(x='10' y='12' rx='9' ry='9' width='50' height='2')
          rect(x='10' y='22' rx='9' ry='9' width='50' height='2')
          rect(x='70' y='22' rx='9' ry='9' width='20' height='2')
          rect(x='10' y='32' rx='9' ry='9' width='50' height='2')
          rect(x='70' y='32' rx='9' ry='9' width='20' height='2')
          rect(x='10' y='42' rx='9' ry='9' width='50' height='2')
          rect(x='70' y='42' rx='9' ry='9' width='20' height='2')
          rect(x='10' y='52' rx='9' ry='9' width='50' height='2')
          rect(x='70' y='52' rx='9' ry='9' width='20' height='2')
          rect(x='10' y='62' rx='9' ry='9' width='50' height='2')
          rect(x='70' y='62' rx='9' ry='9' width='20' height='2')
      h3 Author: {{ item.author }}
</template>

<script>
export default {
  name: 'layouts',
  data () {
    return {
      layouts: [
        {
          id: 'theme_lucaslimay',
          name: 'Layout Padrão',
          description: 'Descrição do layout e design',
          src: '~/assets/bg-paper.jpg',
          author: 'Lucas Lima',
          isActive: false
        },
        {
          id: 'theme_lucaslimax',
          name: 'Tema Designer',
          description: 'Descrição do layout e design',
          src: '~/assets/bg-paper.jpg',
          author: 'Lucas Lima',
          isActive: false
        },
        {
          id: 'theme_outro',
          name: 'Tema programador',
          description: 'Descrição do layout e design',
          src: '~/assets/bg-paper.jpg',
          author: 'Lucas Lima',
          isActive: false
        },
        {
          id: 'theme_teste',
          name: 'Nome do layout',
          description: 'Descrição do layout e design',
          src: '~/assets/bg-paper.jpg',
          author: 'Lucas Lima',
          isActive: false
        }
      ]
    }
  },
  methods: {
    selectLayout (key) {
      let event = this.layouts[key]
      let appTheme = document.getElementById('app-theme')

      if (event.isActive) {
        this.disableLayout()
        event.isActive = false
        appTheme.className = ''
        appTheme.className = 'app animate_app_intro'
      } else {
        this.disableLayout()
        event.isActive = true
        appTheme.className = ''
        appTheme.className = 'app animate_app_intro'
        appTheme.classList.add(event.id)
      }
    },
    disableLayout () {
      let lay = this.layouts
      for (var i = 0; i < lay.length; i++) {
        lay[i].isActive = false
      }
    }
  }
}
</script>
