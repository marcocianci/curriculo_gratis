<template lang="pug">
footer.footer.animate_intro.display-n-print
  a(href="http://www.twitter.com/lucaslimay")
    | Created with <i>&#9775;</i> the force
    br
    | Author:
    small  @lucaslimay
  a(href="#" v-scroll-to="'#top'").scroll-top
    | Subir a página
</template>

<script>
export default {
  name: 'footer-page'
}
</script>
