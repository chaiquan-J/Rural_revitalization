import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Industrial from '../views/Industrial_development.vue'
import Rural from '../views/Rural_culture.vue'
import Talent from '../views/Talent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    // 首页
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    // 乡村发展
    path: '/Industrial',
    name: 'Industrial',
    component: Industrial
  },
  {
    // 乡村文化
    path: '/Rural',
    name: 'Rural',
    component: Rural
  },
  {
    // 人才引进
    path: '/Talent',
    name: 'Talent',
    component: Talent
  },
  // 示例
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // {
  //   path: '/',
  //   name: 'Industrial_development',
  //   component: () => ('../views/Industrial_development.vue')
  // }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
