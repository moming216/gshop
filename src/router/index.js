/*
  路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 配置所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },{
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },{
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },{
      path: '/login',
      component: Login
    },{ // 当进入/根目录的时候，重定向到'/msite'，即默认路由
      path: '/',
      redirect: '/msite'
    }
  ]
})
