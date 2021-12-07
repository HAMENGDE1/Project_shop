import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 三级联动组件 --全局组件
import TypeNav from '@/pages//Home/TypeNav/Typenav.vue'
// 第一个参数:全局组建的名字.第二个参数:哪个组件
Vue.component(TypeNav.name, TypeNav)

// 测试
import { reqCategoryList } from '@/api/index.js'
reqCategoryList();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
