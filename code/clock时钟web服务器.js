//引入需要的模块
const http=require('http');
const fs=require('fs');
const path=require('path');
//创建web实例
const server=http.createServer();
//监听request事件，处理后续逻辑
server.on('request',function(req,res){
    //获取用户的url
    const url=req.url;
    //把请求的url地址，映射为本地储存的路径
    //优化资源的请求路径
    let fpath=''
    // const fpath=path.join(__dirname,url);
    if(url==='/'){
        fpath=path.join(__dirname,'./clock/index.html')
    }else{
        fpath=path.join(__dirname,'./clock',url)

    }
    fs.readFile(fpath,"utf8",(err,dataStr)=>{
        if(err) return res.end('404 Not Found')
        res.end(dataStr)
    })

})
//监听8081端口
server.listen(8081,function(){
    console.log('http://127.0.0.1:8081');
})