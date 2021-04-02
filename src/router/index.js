import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '@/views/GoodsList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GoodsList
  }
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes
})

export default router
