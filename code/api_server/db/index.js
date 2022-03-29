//导入mysql模块
const mysql=require('mysql');
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'my_db_01'
})
//向外共享db连接信息
module.exports=db