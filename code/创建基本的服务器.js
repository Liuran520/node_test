// 导入hhtp模块
const http=require('http');
//创建服务器实例
const server=http.createServer();
// 为服务器实例绑定 request 事件，监听客户端的请求
server.on("request",function(req,res){
    console.log('Someone visit our server.');
    // req.url 是客户端请求的 URL 地址
    const url=req.url;
    // req.method 是客户端请求的 method 类型
    const method=req.method;
    // const str=`Your request url is ${url}, and request method is ${method}`;
    const str=`你请求的url地址是 ${url}, 并且请求的类型是 ${method}`;
    // 当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式：
    res.setHeader('Content-Type','text/html;charset=utf8');
    // 调用 res.end() 方法，向客户端响应一些内容
    res.end(str)


})
server.listen(81, function () {  
    console.log('server running at http://127.0.0.1:81')
  })
  