//导入express
const express=require('express');
//创建express的服务器
const app=express();
//定义中间件
const mv=function(req,res,next){
    console.log('这是一个中间件函数');
    //中间件的业务逻辑处理完成后，必须调用next()函数，表示把流转关系转交给下一个中间件或小哥路由
    next();
}
//全局生效的中间件
// app.use(mv);
//简化版的定义全局中间件
//使用 app.use() 连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用，
app.use(function(req,res,next){
    console.log('这是第一个中间件');
    next();
})
app.use(function(req,res,next){
    console.log('这是第二个中间件');
    next();
})
app.use(function(req,res,next){
    console.log('这是第三个中间件');
    next();
})
app.post('/user',(req,res)=>{
    res.send('post方法')
})
//启动服务器
app.listen(81,function(){
    console.log('express server running at http://127.0.0.1:81');
})