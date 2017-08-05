import Vue from 'vue'
import Router from 'vue-router'
// Pages
import Curriculo from '@/components/pages/Curriculo'
import About from '@/components/pages/About'
import Donate from '@/components/pages/Donate'
import Version2 from '@/components/pages/Version2'
// Error 404
import NotFound from '@/components/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Curriculo',
      component: Curriculo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/v2',
      name: 'Version2',
      component: Version2
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
