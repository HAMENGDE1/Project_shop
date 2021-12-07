<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 通过判断路由元信息决定Footer组件显示与隐藏 -->
    <Footer v-show="$route.meta.showFooter"></Footer>
 </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'


export default {
  name: 'App',
  data() { 
    return {

    }
  },
  components:{
    Header,
    Footer
  },
  methods:{

  },
  mounted() {

},
 }
</script>

<style  scoped>
</style>