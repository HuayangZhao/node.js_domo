// 引入服务器
const express = require('express')
// 创建服务器对象
const app = express()
// 引入数据库模块
const mysql = require('mysql')
// 创建服务器对象
const coon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'my_mall'
})
// 只要客户端请求根路径 就提示客户端请求后台服务器成功
app.get('/',(req,res)=>{
    res.send('请求后台服务器成功!')
})

// 调用端口号启动服务器
app.listen(5000,()=>{
    console.log('Express server running at http://127.0.0.1:5000');
})
