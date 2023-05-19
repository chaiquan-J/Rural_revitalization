import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Industrial from '../views/Industrial_development.vue'
import Rural from '../views/Rural_culture.vue'
import Talent from '../views/Talent.vue'
import Login from '../views/Login.vue'
import Enroll from '../views/Enroll.vue'


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
  {
    // 登录
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    // 注册
    path: '/Enroll',
    name: 'Enroll',
    component: Enroll
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
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  // 路由跳转后，让页面回到顶部
  // chrome
  document.body.scrollTop = 0; // firefox
  document.documentElement.scrollTop = 0; // safari
  window.pageYOffset = 0; // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next();
  //to 即将进入的路由
  //from 即将离开的路由
  //next 放行
});

export default router
