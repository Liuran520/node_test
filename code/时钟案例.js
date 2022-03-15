//引入文件读写模块
const fs=require('fs');
//引入文件路径模块
const path=require('path');
// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const RegStyle=/<style>[\s\S]*<\/style>/
// const regScript = /<script>[\s\S]*<\/script>/
const RegScript=/<script>[\s\S]*<\/script>/
// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname,'./files/index.html'),"utf8",function(err,dataStr){
    if(err){return console.log('读取文件失败'+err.message)}
   // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
   resolveCSS(dataStr)
   resolveScript(dataStr)
   resolveHtml(dataStr)
});
//解析css的方法
function resolveCSS(dataStr){
    //使用正则表达式，提取出需要的内容,返回的是一个数组
    const r1=RegStyle.exec(dataStr);
    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    var newCss=r1[0].replace('<style>',"").replace('</style>',"");
    // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCss,function(err){
        if(err){return console.log('写入失败！'+err.message)}
        console.log('写入成功')
    })
}
//解析js的方法
function resolveScript(dataStr){
    //使用正则表达式，提取出需要的内容,返回的是一个数组
    const r1=RegScript.exec(dataStr);
    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    var newScript=r1[0].replace('<script>',"").replace('</script>',"");
    // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newScript,function(err){
        if(err){return console.log('写入失败！'+err.message)}
        console.log('写入成功')
    })
}
//解析html
function resolveHtml(dataStr){
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    var newHtml=dataStr.replace(RegStyle,'<link rel="stylesheet" href="./index.css" />').replace(RegScript,'<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHtml,function(err){
        if(err){return console.log('写入失败！'+err.message)}
        console.log('写入成功')
    })
}