<template>
  <div>
      <Typenav/>
      <Listcontainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor/>
      <Floor/>
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
  methods:{

  },
  mounted() {

  },
 }
</script>

<style  scoped>
</style>