import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 三级联动组件 --全局组件
import TypeNav from './components/TypeNav/Typenav.vue'
// 第一个参数:全局组建的名字.第二个参数:哪个组件
Vue.component(TypeNav.name, TypeNav)
import Carousel from './components/Carousel/Carousel.vue'
// 全局注册组件Carousel
Vue.component(Carousel.name,Carousel)

// 引入mockServer.js   mockjs模拟数据
import '@/mock/mockServer'

// 引入Swiper的JS 
// import 'swiper/js/swiper'
//引入Swiper样式
import 'swiper/css/swiper.min.css'

// 引入仓库
import store from './store'

// 测试
import { reqCategoryList } from '@/api/index.js'
reqCategoryList();

Vue.config.productionTip = false

new Vue({
  router,
  // 注册仓库,组件实例的身上多个$store属性
  store,
  render: h => h(App)
}).$mount('#app')
