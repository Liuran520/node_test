// 导入 express 模块
const express=require('express');
const app=express();
//导入cors中间件
const cors=require('cors');
//导入解析token密钥的配置文件
const config=require('./config.js');
//导入解析token的中间件
const expressJwt=require('express-jwt');
const joi = require('@hapi/joi');
// 将 cors 注册为全局中间件
app.use(cors());
//配置解析表单数据的中间件
//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件：
app.use(express.urlencoded({extended:false}));
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJwt({secret:config.jwtSecretKey}).unless({path:[/^\/api\//]}));
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
//因为userinfo的路由模块，并注册全局中间件
const userinfoRouter=require('./router/userinfo.js');
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my',userinfoRouter);
// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 身份认证失败后的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知的错误
    res.cc(err)
  })
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007,function(){
    console.log('api server running at http://127.0.0.1:3007')
})