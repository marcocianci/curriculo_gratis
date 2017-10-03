<template lang='pug'>
  div
    fieldset.course(v-for="(course, key, index) in coursers")
      legend.animate_intro.text-left
        | Formação Academica
        button.remove_course.btn-less(type="button" @click='remove_component(key)')
          i -
        button.new_course.btn-plus(type="button" @click='new_component(key)')
          i +

      // Get the Course Now?
      label(for="GET-coursenow" v-bind:class="{ active: coursers_now }").animate_intro
        input(id="GET-coursenow" type="checkbox" name="coursedata" v-model="coursers_now").display-n-print
        | Cursando

      // Get the School
      label(for="GET-school").animate_intro
        p.text.text-left Instituição:
        input(id="GET-school" type="text" name="school" placeholder="Escola, cursos, workshops...")

      // Get the Course
      label(for="GET-course").animate_intro
        p.text.text-left Formação:
        input(id="GET-course" type="text" name="course" placeholder="Nome do curso...")

      // Get the Course data
      label(for="GET-coursedata").animate_intro
        p.text.text-left Inicio:
        input(id="GET-coursedata" type="data" name="coursedata" placeholder="00/00/0000").animate_intro
      label(for="GET-coursedata" v-show="!coursers_now").animate_intro
        p.text.text-left Termino:
        input(id="GET-coursedata" type="data" name="coursedata" placeholder="00/00/0000").animate_intro

      // Get the Course About
      label(for="GET-courseabout").animate_intro
        p.text.text-left Sobre:
        textarea(id="GET-courseabout" placeholder="Atividades e  desenvolvimento currilar do seu curso...")
</template>

<script>
  export default {
    name: 'experiencies-data',
    data () {
      return {
        coursers_now: false,
        coursers: [
          {
            name: 'Formação Academica'
          }
        ]
      }
    },
    methods: {
      new_component (key) {
        console.log(this.msg)
        this.coursers.push({ name: key })
        console.log(key)
        console.log('##########')
        console.log(this)
      },
      remove_component (key) {
        console.log(this.msg)
        this.$delete(this.coursers, key)
        console.log(key)
        console.log('##########')
        console.log(this)
      }
    }
  }
</script>
