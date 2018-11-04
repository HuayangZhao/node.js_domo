// 引入服务器
const express = require('express')
const app = express()

// 引入第三方中间件  body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

// 引入cors跨域资源共享
const cors = require('cors')
app.use(cors())

// 引入路由
const router = require('./router.js')
app.use(router)

// 调用端口号启动服务器
app.listen(5000,()=>{
    console.log('Express server running at http://127.0.0.1:5000');
})

