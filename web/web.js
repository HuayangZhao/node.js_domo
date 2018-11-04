const express = require('express')
const app = express()
// 托管前端静态页面
app.use(express.static('./views'))
// 这里需要用到虚拟路径 静态资源托管文件会直接去文件下面去找 但不包括文件本身,不设置虚拟路径 是无法加载文件的
 // <link rel="stylesheet" type="text/css" href="/semantic/dist/semantic.min.css"> 
// 不设置虚拟路径就是这样的----->>  http://127.0.0.1:3000/dist/semantic.min.css 路径不对
app.use('/semantic',express.static('./semantic'))
app.use('/node_modules',express.static('./node_modules'))


app.listen(3000,()=>{
    console.log('Express server running at http://127.0.0.1:3000');
})