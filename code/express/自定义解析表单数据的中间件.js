const express=require('express');
const app=express();
//导入 Node.js 内置的 querystring 模块
const qs=require('querystring');
//定义解析表单数据的中间件
app.use(function(req,res,next){
    //定义中间件的业务逻辑
    //1.监听req对象的data事件
    //1.1定义变量，用来储存客户端发送过来的数据
    let str='';
    //1.2.监听req对象的data事件
    req.on('data',(chunk)=>{
        //拼接请求体数据，隐士转换为字符串
        str+=chunk
    });
    //1.3.监听req对象的end事件
    req.on('end',()=>{
        console.log(str);
        //TODO:把字符串格式的请求数据，解析成对象格式
        const body = qs.parse(str)
        req.body=body;
        // req.body=str;
        next();
    });
})
app.post('/user',(req,res)=>{
    res.send(req.body)
})
app.listen(81,function(){
    console.log("express server running at http://127.0.0.1:81");
})