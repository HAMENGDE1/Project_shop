



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
