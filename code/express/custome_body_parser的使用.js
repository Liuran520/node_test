const bodyParser=require('./对自定义的模块进行拆分');
const express=require('express');
const app=express();
app.use(bodyParser);
app.post('/user', (req, res) => {
    res.send(req.body)
  })
app.listen(81,function(){
    console.log("express server running at http://127.0.0.1:81");
})