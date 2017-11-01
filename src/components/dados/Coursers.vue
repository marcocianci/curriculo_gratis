<template lang='pug'>
  div
    button.btn.new_course(v-if="coursers == 0" type="button" @click='new_component()) + Adicionar Formação Academica
    fieldset.course(v-for="(course, key, index) in coursers" :id="'course-' + course.id")
      legend.text-left
        | Formação Academica {{ course.formation.name }}
        button.btn-less(type="button" @click='remove_component(key)')
          i -
        button.btn-plus(type="button" @click='new_component(key)' v-scroll-to="'#course-' + course.id_sibiling")
          i +

      // Get the Course Now?
      label.course_now(v:for="'GET-coursenow' + course.id" @keyup.enter='course.formation.now = !course.formation.now')
        input(:id="'GET-coursenow' + course.id" type="checkbox" name="'now' + course.id" v-model="course.formation.now").display-n-print
        | Cursando

      // Get the School
      label(for="GET-school")
        p.text.text-left Instituição:
        input(id="GET-school" type="text" name="school" placeholder="Escola, cursos, workshops..." v-model="course.formation.school")

      // Get the Course
      label(for="GET-course")
        p.text.text-left Formação:
        input(id="GET-course" type="text" name="course" placeholder="Nome do curso..." v-model='course.formation.name')

      // Get the Course data
      label(for="GET-coursedata")
        p.text.text-left Inicio:
        input(id="GET-coursedata" type="date" name="coursedata" placeholder="00/00/0000" v-model="course.formation.data_start")
      label(for="GET-coursedata")
        p.text.text-left Termino:
        input(id="GET-coursedata" type="date" name="coursedata" placeholder="00/00/0000" v-model="course.formation.data_end")

      // Get the Course About
      label(for="GET-courseabout")
        p.text.text-left Sobre:
        textarea(id="GET-courseabout" placeholder="Atividades e  desenvolvimento currilar do seu curso..." v-model="course.formation.about")
</template>

<script>
  export default {
    name: 'experiencies-data',
    data () {
      return {
        coursers_now: false,
        coursers: [
          {
            id: 0,
            id_sibiling: 1,
            name: 'Formação Academica',
            formation: {
              name: '',
              school: '',
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
      new_component (key = -1) {
        this.coursers.push({
          id: ++key,
          id_sibiling: ++key,
          name: 'Formação Academica',
          formation: {
            name: '',
            school: '',
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
        this.$delete(this.coursers, key)
        console.log(key)
        console.log('##########')
        console.log(this)
      }
    }
  }
</script>
