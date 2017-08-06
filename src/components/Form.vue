<template lang="pug">
// Form get the data info person
form#curriculo(action="")
  fieldset
    legend.animate_intro Dados pessoais

    // Get the name
    label(for="GET-name").animate_intro
      p.text Nome completo:
      input(id="GET-name" value="Lucas Ferreira de Lima" type="text" name="name" placeholder="Preencha com seu nome completo..." required)

    // Get the date of birth
    label(for="GET-dateofbirth").animate_intro
      p.text Data de nascimento:
      input(id="GET-dateofbirth" type="date" name="dateofbirth" placeholder="00/00/0000" required)

    // Get the nationality
    label(for="GET-nationality").animate_intro
      p.text Nacionalidade:
      input(id="GET-nationality" value="Brasileiro" type="text" name="nationality" placeholder="Se nasceu no Brasil é brasileiro..." required)

    // Get the marital status
    p.animate_intro Estado civil:

    label(for="GET-maritalstatus-s").animate_intro
      input(id="GET-maritalstatus-s" type="radio" name="maritalstatus" value="s" required)
      | Solteiro(a)

    label(for="GET-maritalstatus-c").animate_intro
      input(id="GET-maritalstatus-c" type="radio" name="maritalstatus" value="c" required)
      | Casado(a)

    label(for="GET-maritalstatus-d").animate_intro
      input(id="GET-maritalstatus-d" type="radio" name="maritalstatus" value="d" required)
      | Divorciado(a)

    label(for="GET-maritalstatus-v").animate_intro
      input(id="GET-maritalstatus-v" type="radio" name="maritalstatus" value="v" required)
      | Viuvo(a)

    // Get the State
    label(for="GET-state").animate_intro
      p.text Cidade:
      input(id="GET-state" value="São Paulo" type="text" name="state" placeholder="Nome da sua cidade atual...")

    // Get the Address
    label(for="GET-address").animate_intro
      p.text Endereço:
      input(id="GET-address" value="Rua Manuel de Mattos Godinho" type="text" name="address" placeholder="Nome da rua ou avenida...")

    label(for="GET-address-number").animate_intro
      p.text Número:
      input(id="GET-address-number" value="484" type="number" name="address-number" placeholder="Numero da casa ou condominio..")

    // Get the CEP
    label(for="GET-cep").animate_intro
      p.text CEP:
      input(id="GET-cep" pattern="\\d{5}-[0-9]{3}" type="number" name="cep" placeholder="00000-000" required)

    // Get the willingness to travel
    p.animate_intro Disponibilidade para viagens:

    label(for="GET-travel-yes").animate_intro
      input(id="GET-travel-yes" type="radio" name="travel" value="yes")
      | Sim

    label(for="GET-travel-no").animate_intro
      input(id="GET-travel-no" type="radio" name="travel" value="no")
      | Nao


  fieldset.course(v-for="(course, key, index) in coursers")
    legend.animate_intro
      | Formação Academica {{ msg }} {{ course.name }}
      button.new_course.btn-plus(type="button" @click='new_component(key)')
        i +
      button.remove_course.btn-less(type="button" @click='remove_component(key)')
        i -

    // Get the School
    label(for="GET-school-1").animate_intro
      p.text Instituição:
      input(id="GET-school-1" value="E.E.Jornalista Francisco Mesquita" type="text" name="school")

    // Get the Course
    label(for="GET-course-1").animate_intro
      p.text Formação:
      input(id="GET-course-1" value="Ensino médio" type="text" name="course" placeholder="Nome do curso...")

    // Get the Course date
    label(for="GET-coursedate-1").animate_intro
      p.text Inicio:
      input(id="GET-coursedate-1" type="date" name="coursedate" placeholder="00/00/0000").animate_intro
    label(for="GET-coursedate-2").animate_intro
      p.text Termino:
      input(id="GET-coursedate-2" type="date" name="coursedate" placeholder="00/00/0000").animate_intro

    // Get the Course About
    label(for="GET-courseabout-1").animate_intro
      p.text Sobre:
      textarea(id="GET-courseabout-1" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." rows="10" cols="30" placeholder="Atividades e  desenvolvimento currilar do seu curso...")

  fieldset.experience(v-for="(exp, key, index) in exps")
    legend.animate_intro
      | Experiencias {{ msg }} {{ exp.name }}
      button.btn-plus(type="button" @click='new_component(key)')
        i +
      button.btn-less(type="button" @click='remove_component(key)')
        i -

    // Get the Course Now?
    label(for="GET-coursenow").animate_intro
      input(id="GET-coursenow" type="radio" name="coursedate" value="now")
      | Atual

    // Get the School
    label(for="GET-school-2").animate_intro
      p.text Empresa:
      input(id="GET-school-2" type="text" name="school" placeholder="Nome da empresa ou trabalho...")

    // Get the Course
    label(for="GET-course-2").animate_intro
      p.text Cargo:
      input(id="GET-course-2" type="text" name="course" placeholder="Titulo ou cargo...")

    // Get the Course date
    label(for="GET-coursedate-3").animate_intro
      p.text Inicio:
      input(id="GET-coursedate-3" type="date" name="coursedate" placeholder="00/00/0000")
    label(for="GET-coursedate-4").animate_intro
      p.text Termino:
      input(id="GET-coursedate-4" type="date" name="coursedate" placeholder="00/00/0000")


    // Get the Course About
    label(for="GET-courseabout-2").animate_intro
      p.text Sobre:
      textarea(id="GET-courseabout-2" rows="10" cols="30" placeholder="Atividades e  desenvolvimento currilar do seu curso...")
</template>

<script>
export default {
  name: 'form-curriculo',
  data () {
    return {
      msg: '##33',
      coursers: [
        {
          name: 'formaçao'
        }
      ],
      exps: [
        {
          name: 'experiencia'
        }
      ]
    }
  },
  methods: {
    new_component (key) {
      console.log(this.msg)
      this.coursers.push({ name: key })
      console.log(key)
    },
    remove_component (key) {
      console.log(this.msg)
      this.$delete(this.coursers, key)
      console.log(key)
      alert('Milena te amo <3 volte a brilhaaaaar *-* eu vou pedir  pros anjos cantarem por mim.')
    }
  }
}
</script>
