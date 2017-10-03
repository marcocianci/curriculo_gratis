<template lang='pug'>
  div
    fieldset.experience(v-for="(exp, key, index) in exps")
      legend.animate_intro.text-left
        | Experiencia
        button.btn-less(type="button" @click='remove_component(key)')
          i -
        button.btn-plus(type="button" @click='new_component(key)')
          i +

      // Get the exps Now?
      label(for="GET-expsnow" v-bind:class="{ active: exps_now }").animate_intro
        input(id="GET-expsnow" type="checkbox" name="expsdata" v-model="exps_now").display-n-print
        | Atual

      // Get the School
      label(for="GET-school").animate_intro
        p.text.text-left Empresa:
        input(id="GET-school" type="text" name="school" placeholder="Nome da empresa ou trabalho...")

      // Get the exps
      label(for="GET-exps").animate_intro
        p.text.text-left Cargo:
        input(id="GET-exps" type="text" name="exps" placeholder="Titulo ou cargo...")

      // Get the exps data
      label(for="GET-expsdata").animate_intro
        p.text.text-left Inicio:
        input(id="GET-expsdata" type="data" name="expsdata" placeholder="00/00/0000")
      label(for="GET-expsdata" v-show="!exps_now").animate_intro
        p.text.text-left Termino:
        input(id="GET-expsdata" type="data" name="expsdata" placeholder="00/00/0000")

      // Get the exps About
      label(for="GET-expsabout").animate_intro
        p.text.text-left Sobre:
        textarea(id="GET-expsabout" placeholder="Atividades e  desenvolvimento currilar do seu curso...")
</template>

<script>
  export default {
    name: 'experiencies-data',
    data () {
      return {
        exps_now: false,
        exps: [
          {
            name: 'Experiencia'
          }
        ]
      }
    },
    methods: {
      new_component (key) {
        console.log(this.msg)
        this.exps.push({ name: key })
        console.log(key)
        console.log('##########')
        console.log(this)
      },
      remove_component (key) {
        console.log(this.msg)
        this.$delete(this.exps, key)
        console.log(key)
        console.log('##########')
        console.log(this)
      }
    }
  }
</script>
