module.exports = {
    // 关闭eslint
    lintOnSave: false,
    // 代理跨域
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://39.98.123.211',
    //             //   pathRewrite: {"^/api" : ""}
    //             // changeOrigin: true
    //         }
    //     }
    // }
    devServer: {
        proxy: {
            "/api": { // 只对请求路由以/api开头的请求进行代理转发
                target: 'http://39.98.123.211/', // 转发的目标url
                // changeOrigin: true // 支持跨域
            }
        }
    }
}