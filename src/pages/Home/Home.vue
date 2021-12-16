<template>
  <div>
      <Typenav/>
      <Listcontainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor :floorList='floor' v-for="floor in getFloorList" :key="floor.id" />
      <Brand/>

 </div>
</template>

<script>
import Listcontainer from '@/pages/Home/ListContainer/Listcontainer.vue'
import Recommend from '@/pages/Home/Recommend/Recommend.vue'
import Rank from '@/pages/Home/Rank/Rank.vue'
import Like from '@/pages/Home/Linke/Like.vue'
import Floor from '@/pages/Home/Floor/Floor.vue'
import Brand from '@/pages/Home/Brand/Brand.vue'

import {mapState} from 'vuex'
export default {
  name: 'Home',
  data() { 
    return {

    }
  },
  components:{
    Listcontainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
         ...mapState({
          getFloorList: state=>state.home.getFloorList
      })
  },
  methods:{

  },
  mounted() {
        //   派发action,通过vuex发起ajax请求,将数据存储到仓库中
    this.$store.dispatch('getFloorList')
  },
 }
</script>

<style  scoped>
</style>