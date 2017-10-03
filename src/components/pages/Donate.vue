<template lang="pug">
div#donate
  section.container.animate_intro
    h1 Doações
    p Esse web apliticativo é totalmente gratuito, sendo assim você não tem nenhuma obrigação financeira com ele.
    p Porém, ele é mantido online para ajudar outras pessoas assim como deve ter ajudado você.
    p Esse custo de manter o projeto online e evoluiar o seu desenvolvimento virá dos fundos de doações que recebemos.
    p Se você sentir que precisar ajudar com esse projeto de alguma forma simbólica ou deseja expressar algum comentário, deixe sua contribuição no formulário logo a seguir
  br
  main.app.animate_app_intro
    section.section
      svg(class="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512")
        path(d="M146.659 125.521v33.925H0v15.657h146.659v73.068H25.052v15.657h121.607v28.705H48.016v15.657h98.642v78.287H512V125.521H146.659zm349.684 245.301H162.316V148.295l167.01 115.661 123.14-85.169-8.907-12.878-114.227 79.006-149.789-103.737h316.799v229.644z")
        path(d="M458.5360601 155.4872143l12.8606598-8.9291871 8.9291871 12.8606598-12.8606598 8.9291871zM0 336.897h15.658v15.658H0zm33.925 0h97.598v15.658H33.925zM0 203.808h15.658v15.658H0zm33.925 0h97.598v15.658H33.925z")
      form.contact
        label
          span Nome
          input(type='text')
        label
          span E-mail
          input(type='email')
        label
          span Mensagem
          textarea(rows='6')
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
<style lang="stylus">
  .email-icon
    width 100px
  .contact
    font-size 14px
    label,
    span,
    input,
    textarea,
    button
      width calc(100% - 10px) !important
      display block
      float none
    label
      &:nth-of-type(1),
      &:nth-of-type(2)
        width calc(50% - 5px)!important
        float left
      span
        padding-top 10px
    input,
    textarea,
    button
      background #fff
      border 1px solid #ccc
      padding 10px
      margin 20px 10px
      box-sizing border-box
    button
      width calc(100% - 20px) !important

</style>
