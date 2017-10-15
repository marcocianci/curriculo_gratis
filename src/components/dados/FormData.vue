<template lang="pug">
// Form get the data info person
form#curriculo(action="")
  fieldset
    legend.animate_intro.text-left Dados pessoais

    // Get the name
    label(for="GET-name").animate_intro
      p.text.text-left Nome completo:
      input(id="GET-name" type="text" name="name" placeholder="Preencha com seu nome completo..." required)

    // Get the data of birth
    label(for="GET-dataofbirth").animate_intro
      p.text.text-left data de nascimento:
      input(id="GET-dataofbirth" type="date" name="dataofbirth" placeholder="00/00/0000" required)

    // Get the nationality
    label(for="GET-nationality").animate_intro
      p.text.text-left Sua nacionalidade:
      select-country

    // Get the marital status
    p.animate_intro.text-left Estado civil:

    label(for="GET-maritalstatus-s").animate_intro
      input(id="GET-maritalstatus-s" type="radio" name="maritalstatus" value="s" required).display-n-print
      span Solteiro(a)

    label(for="GET-maritalstatus-c").animate_intro
      input(id="GET-maritalstatus-c" type="radio" name="maritalstatus" value="c" required).display-n-print
      span Casado(a)

    label(for="GET-maritalstatus-d").animate_intro
      input(id="GET-maritalstatus-d" type="radio" name="maritalstatus" value="d" required).display-n-print
      span Divorciado(a)

    label(for="GET-maritalstatus-v").animate_intro
      input(id="GET-maritalstatus-v" type="radio" name="maritalstatus" value="v" required).display-n-print
      span Viuvo(a)

    // Get the State
    label(for="GET-state").animate_intro
      p.text.text-left Cidade:
      input(id="GET-state" type="text" name="state" placeholder="Nome da sua cidade atual...")

    // Get the Address
    label(for="GET-address").animate_intro
      p.text.text-left Endereço:
      input(id="GET-address" type="text" name="address" placeholder="Nome da rua ou avenida...")

    label(for="GET-address-number").animate_intro
      p.text.text-left Número:
      input(id="GET-address-number" type="number" name="address-number" placeholder="Numero da casa ou condominio..")

    // Get the CEP
    label(for="GET-cep").animate_intro
      p.text.text-left CEP:
      input(id="GET-cep" pattern="\\d{5}-[0-9]{3}" type="number" name="cep" placeholder="00000-000" required)

    // Get the willingness to travel
    p.animate_intro.text-left Disponibilidade para viagens:

    label(for="GET-travel-yes").animate_intro
      input(id="GET-travel-yes" type="radio" name="travel" value="yes").display-n-print
      span Sim

    label(for="GET-travel-no").animate_intro
      input(id="GET-travel-no" type="radio" name="travel" value="no").display-n-print
      span Nao

  coursers-data
  experiencies-data
</template>

<script>
import Vue from 'vue'
import SelectCountry from '@/components/dados/SelectCountry'
import Experiencies from '@/components/dados/Experiencies'
import Coursers from '@/components/dados/Coursers'

Vue.component('select-country', SelectCountry)
Vue.component('experiencies-data', Experiencies)
Vue.component('coursers-data', Coursers)

export default {
  name: 'form-curriculo'
}
</script>
