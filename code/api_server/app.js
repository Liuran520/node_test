// 导入 express 模块
const express=require('express');
const app=express();
//导入cors中间件
const cors=require('cors');
// 将 cors 注册为全局中间件
app.use(cors());
//配置解析表单数据的中间件
//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件：
app.use(express.urlencoded({extended:false}));
//引入路由模块，并注册全局中间件
const router=require('./router/user.js')
app.use('/api',router)
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007,function(){
    console.log('api server running at http://127.0.0.1:3007')
})