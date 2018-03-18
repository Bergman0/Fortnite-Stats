import Vue from 'vue'
import Router from 'vue-router'
import Fortnite from '@/components/Fortnite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fortnite',
      component: Fortnite
    }
  ]
})
