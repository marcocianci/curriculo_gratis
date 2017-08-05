// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Form from '@/components/Form'
import FormNew from '@/components/FormNew'
import Layouts from '@/components/Layouts'
import Actions from '@/components/Actions'
import Advertising from '@/components/Advertising'
import Footer from '@/components/Footer'

Vue.component('nav-menu', Nav)
Vue.component('header-page', Header)
Vue.component('form-curriculo', Form)
Vue.component('form-curriculo-new', FormNew)
Vue.component('layouts', Layouts)
Vue.component('action-menu', Actions)
Vue.component('publicidade-page', Advertising)
Vue.component('footer-page', Footer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
