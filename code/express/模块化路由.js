//导入express
const express=require("express");
//创建路由对象
const router=express.Router();
//挂载获取用户列表路由
router.get('/',function(req,res){
    res.send('这是get请求')
})
//挂载添加用户路由
router.post('/user',function(req,res){
    res.send('这是post请求')
})
//向外导出路由对象
module.exports=router;