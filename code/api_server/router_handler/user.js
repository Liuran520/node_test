/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 注册用户的处理函数
//导入数据库操作模块
const db = require('../db/index.js');
//导入 bcryptjs
const bcrypt = require('bcryptjs')
//检测mysql模块能否正常工作
// db.query('select 1', (err, result) => {
//     if (err) return console.log(err.message);
//     //只要能打印[rowDataPacket{1:1}]的结果，说明数据连接成功
//     console.log(result);
// })
exports.regUser = (req, res) => {
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body;
    // //判断数据是否合法
    // if (!userinfo.username || !userinfo.password) {
    //     return res.send({ status: 1, message: '用户名和密码不能为空' })
    // }
    //定义SQL语句
    const sql = `select * from ev_users where username=?`;
    db.query(sql, [userinfo.username], (err, results) => {
        //执行sql失败
        // if (err) return res.send({ status: 1, message: err.message });
        if (err) return res.cc(err);
        //用户名被占
        // if (results.length > 0) return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' });
        if (results.length > 0) return res.cc('用户名被占用，请更换其他用户名！');
        // TODO: 用户名可用，继续后续流程...
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        //插入数据
        const sqlStr = `insert into ev_users set ?`;
        db.query(sqlStr, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            //执行sql语句
            // if (err) return res.send({ status: 1, message: err.message });
            if (err) return res.cc(err);
            //执行语句成功，但影响行数不为1
            if (results.affectedRows !== 1) {
                // return res.send({ status: 1, message: '注册用户失败，请稍后再试！' });
                return res.cc('注册用户失败，请稍后再试！')
            }
            //执行语句成功
            // res.send({ status: 0, message: '注册成功！' });
            res.cc('注册成功！', 0)
        });
    });

}
exports.login = (req, res) => {
    res.send('login ok')
}