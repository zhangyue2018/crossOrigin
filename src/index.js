console.log('log');
let xhr = new XMLHttpRequest();

// xhr.open('get', '/api/user', true);
// xhr.open('get', '/user', true);
// 第二种方法：服务端使用cors，前端直接跨域请求
xhr.open('get', 'http://localhost:3000/user', true);
xhr.onload = function() {
    console.log(xhr.response);
}
xhr.send();