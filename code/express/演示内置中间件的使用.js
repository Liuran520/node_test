const { application } = require('express');
const express=require('express');
const app=express();
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据，如果不定义这个中间件的话，就是打印空对象
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.post('/post',(req,res)=>{
    // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件(express.json()方法)，则 req.body 默认等于 undefined
    console.log(req.body);
    res.send('ok')
});
app.post('/book', (req, res) => {
    // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    //调用express.urlencoded({extend:false})方法
    console.log(req.body)
    res.send('ok')
  })
app.listen(81,function(){
    console.log("express server running at http://127.0.0.1:81");
})