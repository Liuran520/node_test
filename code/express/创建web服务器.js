//导入express
const express = require('express');
//创建web服务器
const app = express();
//监听get请求
app.get('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send({ name: 'zs', age: 20, gender: '男' });
});
//监听post请求
app.post('/user',(req,res)=>{
    res.end('请求成功！')
});
// 通过 req.query 可以获取到客户端发送过来的 查询参数
app.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的 查询参数
    // 注意：默认情况下，req.query 是一个空对象
    console.log(req.query)
    res.send(req.query)
  });
//获取 URL 中的动态参数
app.get('/user/:id',(req,res)=>{
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)

})
//调用app.listen(端口号，启动成功后的回调函数),启动服务器
app.listen(8081, () => {
    console.log("express server running at http://127.0.0.1");
})