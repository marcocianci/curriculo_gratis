<template lang="pug">
div
  section.container.animate_intro.display-n-print
    h2
      | Crie seu novo curriculo rápido, fácil e grátis!
      br
      | Aproveite para compartilha em suas redes sociais...

    h3 Diversos formatos de curriculos para sua escolha!

    h2 Preencha o formulário ou faça login...

  main#app-theme.app.animate_app_intro
    section.section
      form-curriculo

  section.layouts.display-n-print
    h1 Escolha o layout
    layouts

  section.display-n-print
    action-menu
</template>

<script>
export default {
  name: 'curriculo'
}
</script>
