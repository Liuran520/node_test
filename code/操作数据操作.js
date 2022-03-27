//1.先安装mysql模块 npm install mysql
//导入mysql模块
const mysql=require('mysql');
//建立与mysql的数据库的连接
const db=mysql.createPool({
    host:"127.0.0.1", //数据库的IP地址
    user:'root', //登录数据库的账号
    password:'admin123', //登录数据库的密码
    database:'my_db_01' //指定要操作那个数据库
})
//检测mysql模块能否正常工作
// db.query('select 1',(err,result)=>{
//     if(err) return console.log(err.message);
//     //只要能打印[rowDataPacket{1:1}]的结果，说明数据连接成功
//     console.log(result);
// })
//查询数据(查询user表中的所有数据)
// db.query('select * from users',(err,results)=>{
//     if(err) return console.log(err.message);
//     //查询成功
//     console.log(results);
// })
// //插入数据向 users 表中新增数据， 其中 username 为 Spider-Man，password 为 pcc321
// //1.要插入到users表中的数据
// const user={username:"Spider-Man",password:"pcc321"};
// //2.待执行的SQL语句，其中英文的?是占位符的具体值
// const SQlstr='insert into users (username,password) values (?,?)';
// //3.使用数组形式，依次为？占位符指定具体的位置
// db.query(SQlstr,[user.username,user.password],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('插入数据成功');
//     }
// })
// // 插入数据的便捷方式
// //向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
// //1.要插入到users表中的数据
// const user={username:"Spider-Man1",password:"pcc123"};
// //2.待执行的SQL语句，其中英文的?是占位符的具体值
// const SQlstr='insert into users set ?';
// //3.使用数组形式，依次为？占位符指定具体的位置
// db.query(SQlstr,user,(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('插入数据成功');
//     }
// })
// //更新数据
// //1.要更新到users表中的数据
// const user={id:5,username:"李四",password:"ls123"};
// //2.待执行的SQL语句，其中英文的?是占位符的具体值
// const SQlstr='update users set ? where id=?';
// //3.使用数组形式，依次为？占位符指定具体的位置
// db.query(SQlstr,[user,user.id],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('更新数据成功');
//     }
// })
// //删除数据
// //1.待执行的SQL语句，其中英文的?是占位符的具体值
// const SQlstr='delete from users where id=?';
// //2.调用db.query()执行SQL语句的同时，为占位符指定具体的值
// //注意：如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// //如果SQL语句中只有一个占位符，则可以省略数组
// db.query(SQlstr,7,(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('删除数据成功');
//     }
// });
//标记删除数据
//1.待执行的SQL语句，其中英文的?是占位符的具体值
const SQlstr='update users set status=1 where id=?';
//2.调用db.query()执行SQL语句的同时，为占位符指定具体的值
//注意：如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果SQL语句中只有一个占位符，则可以省略数组
db.query(SQlstr,6,(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows===1){
        console.log('删除数据成功');
    }
})




