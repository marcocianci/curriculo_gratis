<template lang="pug">
div
  section.container.animate_intro
    h1
      | Doações
    p Esse web apliticativo é totalmente gratuito, sendo assim você não tem nenhuma obrigação financeira com ele.
    p Porém, ele é mantido online para ajudar outras pessoas assim como deve ter ajudado você.
    p Esse custo de manter o projeto online e evoluiar o seu desenvolvimento vem dos fundos de doações que recebemos.
    p Se você sentir que precisar ajudar com esse projeto de alguma forma simbolica ou com algum comentário deixe sua contribuição no formulario logo a seguir
  br
  main.app.animate_app_intro
    section.section
      form-curriculo-new
</template>

<script>
export default {
  name: 'donate',
  head: {
    title: {
      inner: 'Doações'
    }
  }
}
</script>
