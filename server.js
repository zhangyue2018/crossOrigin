let express = require('express');
let app = express();

// var allowCrossDomain = function(req, res, next) {
//     // 请求源 ajax http://localhost:8082
//     res.header("Access-Control-Allow-Origin", "*");
//     // 请求头 x-token
//     res.header("Access-Control-Allow-Headers", "*");
//     // 请求方法 get post put delete
//     res.header("Access-Control-Allow-Methods", "*");
//     next();
// }
// // 第二种方法：服务端使用cors，前端直接跨域请求--生产模式
// app.use(allowCrossDomain);

// 第三种方法：使用webpack-dev-middleware，使web服务器和api服务器启动在同一个接口上--生产模式
let webpack = require('webpack');
let middleware = require('webpack-dev-middleware');
let compiler = webpack(require('./webpack.config.js'));

app.use(middleware(compiler));


app.get('/user', function(req, res) {
    res.json({name: 'jack'})
});

app.listen(3000, function() {
    console.log('服务启动，端口3000');
});

