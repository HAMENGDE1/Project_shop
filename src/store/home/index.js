import {reqCategoryList,reqFloorList,reqGetBannerList} from '@/api'
//home模块的小仓库
const state ={
    // state
    categoryList:[],
    getBannerList:[],
    getFloorList:[]
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求
    // commit    解构赋值 context.commit  commit 
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code === 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图列表数据
    async getBannerList({commit}){
       let result = await reqGetBannerList()
       if(result.code === 200){
        commit('GETBANNERLIST',result.data)
       }
    },
    // 通过ajax异步处理获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList()
        // console.log(result)
        if(result.code === 200){
            commit('GETFLOORLIST',result.data)
        }
    }
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
       //主页轮播图数据
       GETBANNERLIST(state,getBannerList){
        state.getBannerList = getBannerList
    },
    // 获取Floor组件数据并修改state中数据
    GETFLOORLIST(state,getFloorList){
            state.getFloorList = getFloorList
    }
};
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}