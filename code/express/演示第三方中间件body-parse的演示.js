const parser = require('body-parser');
const express = require('express');
const app = express();
app.use(parser.urlencoded({ extended: false }));
app.post('/user', (req, res) => {
    // res.send(req.body);
    // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body)
    res.send('ok')
})
app.listen(81, function () {
    console.log("express server running at http://127.0.0.1:81");
})