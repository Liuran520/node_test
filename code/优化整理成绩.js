//导入fs模块
const fs=require('fs');
const path=require('path');
//读取files文件夹下的成绩.txt文件
const pathStr=path.join(__dirname,"./files/成绩.txt");
console.log(pathStr);
fs.readFile(pathStr,'utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败'+ err.message)
    }
    //读写成功，将读取的数据用空格分隔成数组
    const arrOld=dataStr.split(" ");
    const arrNew=[];
    //循环分隔的数组，将每项的=替换为：
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'));
    });
    //将arrNew这个数组转换为一个新的字符串，把新数组中的每一项，进行合并，得到一个新的字符串
    var newStr=arrNew.join('\r\n');
    const pathStr1=path.join(__dirname,'./files/成绩1-ok.txt');
    console.log(pathStr1);
    fs.writeFile(pathStr1,newStr,function(err){
        if(err){
            return console.log('写入失败'+err.message);
        }
        console.log('写入成功');
    })
})