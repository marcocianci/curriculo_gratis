<template lang="pug">
section.container.animate_intro
  | {{ msg }}
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
      msg: 'Nada encontrado 404'
    }
  }
}
</script>
