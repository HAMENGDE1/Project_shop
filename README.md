
修改默认./路径
全局组件放在component中
路由组件放到pages

axios二次封装



8.2路由传参,参数有两种写法
params参数: 属于路径当中的一部分,在配置路由的时候,需要占位
query参数: 不属于路径中的一部分,类似于ajax中的queryString   /home?k=v&kv=,不需要占位

编程式路由跳转到当前路由(参数不变),多次执行会抛出NavigationDuplicated的警告错误
    通过给push或replace方法传递相应的成功\失败的回调函数,可以捕获到当前错误
    this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{})

跨域问题
        协议、域名、端口号不同
    解决方法
         JSONP  CROS  代理

nprogress
    安装 npm install --save nprogress
    分别导入  nprogress.js js文件 和  nprogress.css 样式表
    分别在  请求拦截器中调用nprogress.start() 进度条开始  和  响应拦截器中调用nprogress.done() 进度条结束

vuex 状态管理库
    集中式管理项目中共用的数据
    state       mutations   actions     getters     modules
vuex实现模块式开发


完成一级分类动态添加背景颜色
    第一种：采用样式添加hover
    第二种：通过js完成

通过JS控制二三级商品分类
    
函数的防抖和节流
    lodash插件：封装函数的防抖与节流业务（闭包、延迟器）
    防抖：用户操作频繁，但是只执行一次
    节流：用户操作频繁，但是把频繁变为少量操作

三级联动组件的路由跳转与传递参数
     路由跳转
        1、声明式导航
        2、编程式导航
自定义属性


1)开发Search模块中的TypeNav商品分类菜单(过渡动画效果)
过渡动画:前提组件 | 元素务必要有v-if | v-show 指令才可以进行过度动画

2)对商品分类三级列表进行优化
    在APP跟组件中发请求(跟组件mounted)执行一次

3)合并params与query参数

4) mockjs模拟数据    开发Home首页当中的ListContainer组件与Floor组件
服务器返回的数据(接口)只有商品分类菜单分裂数据,对于ListContainer和Floor组件没有提供
mock数据(模拟):需要安装插件mockjs

使用步骤:
1)src中创建一个mock文件夹
2)准备json数据(mock文件夹中创建相应文件)json数据格式化
3)把mock数据需要的图片放置到public文件夹中(public打包的时候,会把对应资源原封不动的打包到dist文件夹中)
4)创建mockServer.js,通过mockjs插件模拟数据
5)将mockServer.JS文件在入口文件中引入(至少执行一次,才能模拟数据)
# project_shp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
