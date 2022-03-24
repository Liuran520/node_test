const express=require('express');
const app=express();
//挂载路由
app.get('/',function(req,res){
    res.send('hello word')
});
//挂载路由
app.post('/user',function(req,res){
    res.send('get it user')
})
app.listen(81,(res,req)=>{
    console.log('express server running at http://127.0.0.1:81');
})