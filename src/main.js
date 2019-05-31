/*
入口JS
 */

import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由器

new Vue({
  el: '#app',
  render: h => h(App),
  router  // 配置路由器对象，结果：1多了几个路由组件标签、2多了2个属性$router和$route
})
