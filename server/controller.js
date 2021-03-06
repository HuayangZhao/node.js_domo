// 业务处理模块

// 引入数据库模块
const mysql = require('mysql')
// 创建服务器对象
const coon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'heros'
})

module.exports = {
    testAPI:(req,res)=>{
        res.send('请求后台服务器成功!')
    },
    getAllHero:(req,res)=>{
        let sql = 'select * from hero'
        coon.query(sql,(err,result)=>{
            if(err) res.status(500).send({status:500,mse:err.message,data:null})
            res.send({status:200,mse:'ok'.message,data:result})
        })
    },
    addHero:(req,res)=>{
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
    },
    getHero:(req,res)=>{
        const id = req.params.id
        const sql = 'select * from hero where id=?'
        coon.query(sql,id,(err,result)=>{
            if(err) res.status(500).send({status:500,mse:err.message,data:null})
            res.send({status:200,mse:'ok'.message,data:result})
        })
    },
    // updateHero:(req,res)=>{
    //     const hero = req.body
    //     const id = req.params.id
    //     const sql = 'update hero set ? where id=?'
    //     coon.query(sql,[hero,id],(err,result)=>{
    //         if(err) res.status(500).send({status:500,mse:err.message,data:null})
    //         res.send({status:200,mse:'ok'.message,data:ull})
    //     })
    // },
    updateHero: (req, res) => {
        const id = req.params.id
        const newInfo = req.body
        const sql = 'update hero set ? where id=?'
        coon.query(sql, [newInfo, id], (err, result) => {
          if (err) return res.send({ status: 500, msg: err.message, data: null })
          res.send({ status: 200, msg: 'ok', data: null })
        })
      },
      
    deleteHero:(req,res)=>{
        const id = req.params.id
        const sql = 'update hero set isdel=1 where id=?'
        coon.query(sql,id,(err,result)=>{
            if(err) res.status(500).send({status:500,mse:err.message,data:null})
            res.send({status:200,mse:'ok'.message,data:null})
        })
    }
}