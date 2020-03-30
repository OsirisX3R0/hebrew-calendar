import Vue from 'vue'
//import { IonicVueRouter } from '@ionic/vue'
import VueRouter from 'vue-router';
import Home from './views/Home'
import Settings from './views/Settings'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
