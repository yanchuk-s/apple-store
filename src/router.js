import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);
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
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin/Admin.vue'),
      children: [
        {
          path: '',
          name: 'adminhome',
          component: () => import('./views/admin/AdminHome.vue'),
        },
        {
          path: 'addproduct',
          component: () => import('./views/admin/Addprod.vue'),
        },
        {
          path: 'products',
          component: () => import('./views/admin/Products.vue'),
        }
      ],
      beforeEnter: (to, from, next) => {
        if(VueCookie.get('login')){
          next()
        }else{
          next({ path: '/login' })
        }
      }
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
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      beforeEnter: (to, from, next) => {
        if(VueCookie.get('login')){
          next({ name: 'adminhome' })
        }else{
          next()
        }
      }
    },
  ],
  scrollBehavior () {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
  }
})
