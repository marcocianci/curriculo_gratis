<template lang="pug">
// Form get the data info person
form#curriculo(action="")
  fieldset
    legend.text-left Dados pessoais

    // Get the name
    label(for="GET-name")
      p.text.text-left Nome completo:
      input(id="GET-name" type="text" name="name" placeholder="Preencha com seu nome completo..." required)

    // Get the data of birth
    label(for="GET-dataofbirth")
      p.text.text-left data de nascimento:
      input(id="GET-dataofbirth" type="date" name="dataofbirth" placeholder="00/00/0000" required)

    // Get the nationality
    label(for="GET-nationality")
      p.text.text-left Sua nacionalidade:
      select-country

    select-maritals

    // Get the State
    label(for="GET-state")
      p.text.text-left Cidade:
      input(id="GET-state" type="text" name="state" placeholder="Nome da sua cidade atual...")

    // Get the Address
    label(for="GET-address")
      p.text.text-left Endereço:
      input(id="GET-address" type="text" name="address" placeholder="Nome da rua ou avenida...")

    label(for="GET-address-number")
      p.text.text-left Número:
      input(id="GET-address-number" type="number" name="address-number" placeholder="Numero da casa ou condominio..")

    // Get the CEP
    label(for="GET-cep")
      p.text.text-left CEP:
      input(id="GET-cep" pattern="\\d{5}-[0-9]{3}" type="number" name="cep" placeholder="00000-000" required)

    // Get the willingness to travel
    p.text-left Disponibilidade para viagens:

    label(for="GET-travel-yes")
      input(id="GET-travel-yes" type="radio" name="travel" value="yes").display-n-print
      span Sim

    label(for="GET-travel-no")
      input(id="GET-travel-no" type="radio" name="travel" value="no").display-n-print
      span Nao

  coursers-data
  experiencies-data
</template>

<script>
import Vue from 'vue'
import SelectCountry from '@/components/dados/SelectCountry'
import SelectMaritals from '@/components/dados/SelectMaritals'
import Experiencies from '@/components/dados/Experiencies'
import Coursers from '@/components/dados/Coursers'

Vue.component('select-country', SelectCountry)
Vue.component('select-maritals', SelectMaritals)
Vue.component('experiencies-data', Experiencies)
Vue.component('coursers-data', Coursers)

export default {
  name: 'form-curriculo'
}
</script>
