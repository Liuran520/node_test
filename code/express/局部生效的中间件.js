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
//不使用 app.use() 定义的中间件，叫做局部生效的中间件
// app.use(mv);全局中间件
//简化版的定义全局中间件
// app.use(function(req,res,next){
    
//     const time=new Date();
//     console.log('这是一个中间件'+time);
//     req.startTime=time;
//     next();
// })
//mv中间件只在get路由中起作用，这就是局部中间件
app.get('/',mv,(req,res)=>{
    res.send('ok')
})
//mv在post路由中不起作用
app.post('/user',(req,res)=>{
    res.send('post方法')
})
//启动服务器
app.listen(81,function(){
    console.log('express server running at http://127.0.0.1:81');
})