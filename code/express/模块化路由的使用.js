const express=require('express');
const app=express();
const router=require('./模块化路由');
//使用app.use()注册路由,这个是不添加的前缀的
// app.use(router)
//为路由模块添加前缀
app.use('/api',router)
app.listen(81,function(req,res){
    console.log('express server running at http://127.0.0.1:81');
})
