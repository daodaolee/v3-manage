/*  RouteRecordRaw 是router的约束类型，如果需要扩展routes的参数，可以这样
 *  type RouteConfig = RouteRecordRaw & { hidden? : boolean}  hidden是可选属性
 *  const routes: Array<RouteRonfig> = []
*/
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})