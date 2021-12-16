import Vue from 'vue'
import Vuex from 'vuex'
// 需要使用vuex
Vue.use(Vuex)

// 引入小仓库
import home from './home'


    // // state：仓库存储数据的地方
    // const state = {
    //     count:1
    // };
    // // mutations:修改state的地方
    // const mutations = {
    //     ADD(state,count){
    //         state.count++;
    //     }
    // };
    // // actions:处理action，书写业务逻辑，处理异步
    // const actions = {
    //     // 书写业务逻辑，但不能修改state
    //     add({commit}){
    //         commit("ADD")
    //     }
    // };
    // // getters: 理解为计算属性
    // const getters = {}

//对外暴露Store类的一个实列
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters
    modules:{
        home

    }
})