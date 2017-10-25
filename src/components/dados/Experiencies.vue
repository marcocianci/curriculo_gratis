<template lang='pug'>
  div
    fieldset.experience(v-for="(exp, key, index) in exps" :id="'exp-' + exp.id")
      legend.text-left
        | Experiencia {{ exp.experience.work }}
        button.btn-less(type="button" @click='remove_component(key)')
          i -
        button.btn-plus(type="button" @click='new_component(key)' v-scroll-to="'#exp-' + exp.id_sibiling")
          i +

      // Get the exps Now?
      label.exps_now(v:for="'GET-expsnow' + exp.id" v-bind:class="{ active: exp.experience.now }" @keyup.enter='exp.experience.now = !exp.experience.now')
        input(:id="'GET-expsnow' + exp.id" type="checkbox" v:name="'now' + exp.id" v-model="exp.experience.now").display-n-print
        | Atual

      // Get the School
      label(for="GET-school")
        p.text.text-left Empresa:
        input(id="GET-school" type="text" name="school" placeholder="Nome da empresa ou trabalho..." v-model="exp.experience.name")

      // Get the exps
      label(for="GET-exps")
        p.text.text-left Cargo:
        input(id="GET-exps" type="text" name="exps" placeholder="Titulo ou cargo..." v-model="exp.experience.work")

      // Get the exps data
      label(for="GET-expsdata")
        p.text.text-left Inicio:
        input(id="GET-expsdata" type="date" name="expsdata" placeholder="00/00/0000")
      label(for="GET-expsdata" v-show="!exp.experience.now")
        p.text.text-left Termino:
        input(id="GET-expsdata" type="date" name="expsdata" placeholder="00/00/0000")

      // Get the exps About
      label(for="GET-expsabout")
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
            id: 0,
            id_sibiling: 1,
            name: 'Experiencia',
            experience: {
              name: '',
              work: '',
              data_start: '',
              data_end: '',
              about: '',
              now: false
            }
          }
        ]
      }
    },
    methods: {
      new_component (key) {
        this.exps.push({
          id: ++key,
          id_sibiling: ++key,
          name: 'Experiencia',
          experience: {
            name: '',
            work: '',
            data_start: '',
            data_end: '',
            about: '',
            now: false
          }
        })
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
