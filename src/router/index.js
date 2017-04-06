import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: { name: 'home' },
      children: [
        { name: 'home', path: '/home', component: Home }
      ]
    },
    { name: 'login', path: '/login', component: Login }
  ]
})
