import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search/Search.vue'
import Register from '@/pages/Register/Register.vue'
import Login from '@/pages/Login/Login.vue'


Vue.use(VueRouter)

const routes = [                                  
  // 路由重定向
  {
    path:'/',
    redirect: '/home',
  },
  {
    path:'/home',
    component:Home,
    // 路由元信息
    meta:{showFooter:true}
  },
  {
    name:'search',
    path:'/search/:keyword?',
    // path:'/search',
    component:Search,
    meta:{showFooter:true},
    // 第一种：布尔值，可以将params的值作为路由组件的属性
    // props:true,
    // 第二种：对象
    // props:{a:2,b:2}
    // 第三种：函数式写法
    // props:(route)=>{
    //   return {keyword:route.params.keyword,k:route.query.k}
    // }
  },
  // {
  //   path:'/search/',
  //   component:Search,
  //   meta:{showFooter:true},
  //   name:'search',
    // 4:路由组件能不能传递props数据
    //  布尔值写法:params
    // props:true
    // 对象写法
    // props:{a:1,b:2}
    // 函数写法:可以params参数,query参数,通过props传递路由组件
    // props:($route)=>{
    //   return {keyword:$route.params.keyword,k:$route.query.k}
    // }
  // },
  {
    path:'/Login',
    component:Login,
    meta:{showFooter:false}
  },
  {
    path:'/register',
    component:Register,
    meta:{showFooter:false}
  }

]

const router = new VueRouter({
  routes
})

export default router
