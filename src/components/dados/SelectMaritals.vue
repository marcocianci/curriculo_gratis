<template lang="pug">
div
  // Get the marital status
  p.text-left Estado civil:

  label(for="GET-maritalstatus-s")
    input(id="GET-maritalstatus-s" type="radio" name="maritalstatus" v-model="maritalstatus" value="s" required).display-n-print
    span Solteiro(a) {{ maritalstatus }}

  label(for="GET-maritalstatus-c")
    input(id="GET-maritalstatus-c" type="radio" name="maritalstatus" v-model="maritalstatus" value="c" required).display-n-print
    span Casado(a) {{ maritalstatus }}

  label(for="GET-maritalstatus-d")
    input(id="GET-maritalstatus-d" type="radio" name="maritalstatus" v-model="maritalstatus" value="d" required).display-n-print
    span Divorciado(a) {{ maritalstatus }}

  label(for="GET-maritalstatus-v")
    input(id="GET-maritalstatus-v" type="radio" name="maritalstatus" v-model="maritalstatus" value="v" required).display-n-print
    span Viuvo(a) {{ maritalstatus }}
</template>

<script>
  export default {
    name: 'select-maritals',
    data () {
      return {
        maritalstatus: true
      }
    }
  }
</script>
