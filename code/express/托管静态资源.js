//引入express
const express=require('express');
const app=express();
// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use('/files', express.static('./files'))
app.use(express.static('../clock'));
// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：
// app.use(express.static("../files"))
app.listen(8081,()=>{
  console.log('express server running at http://127.0.0.1');
})