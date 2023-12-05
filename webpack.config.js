var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口 模块化
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // 资源路径
    },
    // 跨域第一种解决方式：开发模式下，前端设置devServer proxy代理
    // devServer: {
    //     proxy: { // 代理 --代理那些路径的请求，只改变协议、域名和端口，path是否改变需要配置
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         },
    //         '/user': {
    //             target: 'http://localhost:3000'
    //         }
    //     }
    // },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    mode: 'development'
}