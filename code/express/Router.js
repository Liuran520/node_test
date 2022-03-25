const express = require('express');
const router = express.Router();

//在这里挂载路由
router.get('/get', (req, res) => {
    //获取客户端查询字符串，发送到服务器
    const query = req.query;
    //2.调用res.send()方法
    res.send({
        status: 0, //状态，0表示成功，1表示失败
        msg: 'GET请求成功！', //状态描述
        data: query, //需要给相应给客户端的数据
    })
});
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body;
    console.log(body);
    //调用res.send()方法，把数据相应给客户端
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body,
    })
});
router.delete('/delete',(req,res)=>{
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
      })
})
module.exports = router