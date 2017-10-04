// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Form from '@/components/dados/FormData'
import FormNew from '@/components/FormNew'
import Layouts from '@/components/Layouts'
import Actions from '@/components/Actions'
import Notice from '@/components/Notice'
import Advertising from '@/components/Advertising'
import Footer from '@/components/Footer'

Vue.use(VueFire)
Vue.use(VueHead)
Vue.use(VueScrollTo)

Vue.component('nav-menu', Nav)
Vue.component('header-page', Header)
Vue.component('form-curriculo', Form)
Vue.component('form-curriculo-new', FormNew)
Vue.component('layouts', Layouts)
Vue.component('action-menu', Actions)
Vue.component('notice-page', Notice)
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
