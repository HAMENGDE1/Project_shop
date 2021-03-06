// 当前这个模块，API进行统一管理
import requests from './request.js'
import mockRequest from './mockAjax.js'

// 三级联动的接口
// /api/product/getBaseCategoryList  get 无参数
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

// 获取banner(首页轮播图接口数据)
export const reqGetBannerList = ()=> mockRequest({url:'/banner',method:'get'})

// 获取floor组件数据
export const reqFloorList = ()=> mockRequest.get('/floor')