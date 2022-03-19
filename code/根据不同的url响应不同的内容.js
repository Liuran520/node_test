const http=require('http');
const server=http.createServer();
server.on('request',function(req,res){
    //获取请求的url地址
    const url=req.url;
    //设置默认内容
    let content='<h1>40</h1>';
    if(url==='/'||url==='/index.html'){
        content='<h1>首页</h1>'
    }else if(url==='/about.html'){
        content='<h1>关于页面</h1>'
    }
    //防止乱码，设置防乱码格式
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content)
});
server.listen(81,function(){
    console.log('http://127.0.0.1:81');
})