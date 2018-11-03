// 引入服务器
const express = require('express')
// 创建服务器对象
const app = express()
// 引入第三方中间件  body-parser
const bodyParser = require('body-parser')
// 注册中间件
app.use(bodyParser.urlencoded({extended:false}))
// 引入路由
const router = require('./router.js')
// 注册路由模块
app.use(router)
// 调用端口号启动服务器
app.listen(5000,()=>{
    console.log('Express server running at http://127.0.0.1:5000');
})

