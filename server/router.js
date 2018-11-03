// 路由模块
const express = require('express')
const router = express.Router()

// 引入数据库模块
const mysql = require('mysql')
// 创建服务器对象
const coon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'heros'
})

// 只要客户端请求根路径 就提示客户端请求后台服务器成功
router.get('/',(req,res)=>{
    res.send('请求后台服务器成功!')
})

// 请求所有英雄列表接口
router.get('/getAllHero',(req,res)=>{
    let sql = 'select * from hero'
    coon.query(sql,(err,result)=>{
        if(err) res.status(500).send({status:500,mse:err.message,data:null})
        res.send({status:200,mse:'ok'.message,data:result})
    })
})

// 插入新的英雄数据
router.post('/addHero',(req,res)=>{
    // 首先获取客户端传递过来的参数:name gender say 
    const hero = req.body
    // 创建时间就用服务器端时间 并把时间挂在英雄time属性上
    const time = new Date()
    let y = time.getFullYear()
    // padStart(2,'0') 第一个参数是期望长度 第二个参数是不满足期望长度时用指定参数填充
    let m = (time.getMonth()+1).toString().padStart(2,'0')
    let d = time.getDate().toString().padStart(2,'0')
    let h = time.getHours().toString().padStart(2,'0')
    let mm = time.getMinutes().toString().padStart(2,'0')
    let ss = time.getSeconds().toString().padStart(2,'0')
    hero.time = `${y}-${m}-${d} ${h}:${mm}:${ss}`
    // 调用coon.query 添加英雄
    const sql = 'insert into hero set ?'
    coon.query(sql, hero,(err,hero,result)=>{
        if(err) res.status(500).send({status:500,mse:err.message,data:null})
        res.send({status:200,mse:'ok'.message,data:null})
    })
})
// 根据Id获取英雄信息
router.get('/getHero/:id',(req,res)=>{
    const id = req.params.id
    const sql = 'select * from hero where id=?'
    coon.query(sql,id,(err,result)=>{
        if(err) res.status(500).send({status:500,mse:err.message,data:null})
        res.send({status:200,mse:'ok'.message,data:result})
    })
})
// 根据Id更新英雄数据
router.post('/updateHeero/:id',(req,res)=>{
    const hero = req.body
    const id = req.params.id
    const sql = 'update hero set ? where id=?'
    coon.query(sql,[hero,id],(err,result)=>{
        if(err) res.status(500).send({status:500,mse:err.message,data:null})
        res.send({status:200,mse:'ok'.message,data:ull})
    })
})
// 根据Id软删除英雄数据
router.get('/deleteHero/:id',(req,res)=>{
    const id = req.params.id
    const sql = 'update hero set isdel=1 where id=?'
    coon.query(sql,id,(err,result)=>{
        if(err) res.status(500).send({status:500,mse:err.message,data:null})
        res.send({status:200,mse:'ok'.message,data:null})
    })
})

module.exports = router