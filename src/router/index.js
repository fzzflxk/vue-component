import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/button-demo',  // 初始化的时候指定跳转的地址
    component: Layout,
    children: [
      {
        path: '/button-demo', //显示的地址
        name: 'buttonDemo', // 地址的别名，必填
        component: () => import('@/views/pages/fs-button-demo'), // src/views/pages/fs-button-demo/index.vue
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
