import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/pages/Login'

import InputDemo from '@/elements/Input/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/input-demo',
      name: 'InputDemo',
      component: InputDemo
    }
  ]
})
