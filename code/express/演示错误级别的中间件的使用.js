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
app.get('/',(req,res)=>{
    throw new Error('服务器内部发生问题了')
    res.send('ok')
})
//：错误级别的中间件，必须注册在所有路由之后！
app.use(function(err,req,res,next){
    console.log('发生了错误'+err.message);
    res.send('Error'+err.message);
})
//启动服务器
app.listen(81,function(){
    console.log('express server running at http://127.0.0.1:81');
})