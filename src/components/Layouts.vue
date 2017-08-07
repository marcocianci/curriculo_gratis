<template lang="pug">
  .center
    article#theme_lucaslimax.layout(v-for="(item, key, index) in layouts"
                                    v-bind:class="{ active: item.isActive }"
                                    @click.prevent="selectLayout(key)")
      h2 {{ item.name }}
      picture
        img(:src="item.src" :alt="item.description")
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
      if (event.isActive) {
        this.disableLayout()
        event.isActive = false
      } else {
        this.disableLayout()
        event.isActive = true
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
