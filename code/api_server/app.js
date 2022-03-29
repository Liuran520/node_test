// 导入 express 模块
const express=require('express');
const app=express();
//导入cors中间件
const cors=require('cors');

const joi = require('@hapi/joi');
// 将 cors 注册为全局中间件
app.use(cors());
//配置解析表单数据的中间件
//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件：
app.use(express.urlencoded({extended:false}));
// 一定要在路由之前，封装 res.cc 函数
app.use(function(req,res,next){
    res.cc=function(err,status=1){
        res.send({
            //状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message:err instanceof Error ? err.message : err,
        })
    }
    next();
})
//引入路由模块，并注册全局中间件
const router=require('./router/user.js');
app.use('/api',router);
// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    res.cc(err)
  })
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007,function(){
    console.log('api server running at http://127.0.0.1:3007')
})