// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条的样式
import 'nprogress/nprogress.css'
// start:进度条开始   done：进度条结束

// 1、利用axios对象的方法create，去创建一个axios实例
// 2、requests就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    baseURL: "/mock",
    // 代表请求超时时间
    timeout: 5000
});
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前处理逻辑业务
requests.interceptors.request.use((config) => {
    // config :配置对象，对象属性的header请求头较重要
    // 进度条开始
    nprogress.start();
    return config;
});

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功回调函数
    // 进度条结束
    nprogress.done()
    return res.data
}, (error) => {
    // 响应失败回调函数
    return Promise.reject(error);
})


// 对外暴露
export default requests