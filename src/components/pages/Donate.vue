<template lang="pug">
div
  section.container.animate_intro
    h1 Doações
    p Esse web apliticativo é totalmente gratuito, sendo assim você não tem nenhuma obrigação financeira com ele.
    p Porém, ele é mantido online para ajudar outras pessoas assim como deve ter ajudado você.
    p Esse custo de manter o projeto online e evoluiar o seu desenvolvimento virá dos fundos de doações que recebemos.
    p Se você sentir que precisar ajudar com esse projeto de alguma forma simbólica ou deseja expressar algum comentário, deixe sua contribuição no formulário logo a seguir
  br
  main.app.animate_app_intro
    section.section
      form
        label
          span Nome
          input(type='text')
        br
        label
          span E-mail
          input(type='email')
        br
        label
          span Mensagem
          textarea(rows='6')
        br
        button(type='submit') Enviar
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
