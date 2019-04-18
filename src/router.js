import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mac',
      name: 'mac',
      component: () => import(/* webpackChunkName: "about" */ './views/Mac.vue')
    },
    {
      path: '/iphone',
      name: 'iphone',
      component: () => import(/* webpackChunkName: "about" */ './views/Iphone.vue')
    },
    {
      path: '/ipad',
      name: 'ipad',
      component: () => import(/* webpackChunkName: "about" */ './views/Ipad.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import(/* webpackChunkName: "about" */ './views/Watch.vue')
    },
    {
      path: '/:category/:slug',
      name: 'product',
      props: true,
      component: () => import('./views/Product.vue')
    },
  ]
})
