// 引入vue
import Vue from 'vue'
// 引入vue-router功能
import VueRouter from 'vue-router'
// 引入需要跳转的页面
import Home from '../views/Home.vue'
import Industrial from '../views/Industrial_development.vue'
import Rural from '../views/Rural_culture.vue'
import Talent from '../views/Talent.vue'
import Login from '../views/Login.vue'
import Enroll from '../views/Enroll.vue'
import Information from '../views/Information.vue'

// 挂载属性
Vue.use(VueRouter)

// 配置路由列表
const routes = [
  // 默认页面
  {
    path: '/',
    redirect: '/Home'
  },
  {
    // 首页
    // 路由跳转地址
    path: '/Home',
    // 路由名字
    name: 'Home',
    // 链接引入的页面
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
    // 振兴资讯
    path: '/Information',
    name: 'Information',
    component: Information
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
]

// 创建路由对象
const router = new VueRouter({
  // 配置路由激活状态的class类名
  linkActiveClass: 'active',
  // 配置路由模式
  mode: 'hash',
  // 挂载路由列表
  routes
})

// 路由跳转后，让页面回到顶部
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0; // firefox
  document.documentElement.scrollTop = 0; // safari
  window.pageYOffset = 0; // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next();
  //to 即将进入的路由
  //from 即将离开的路由
  //next 放行
});

// 将路由接口开放
export default router
