// 路由模块
const express = require('express')
const router = express.Router()
// 导入封装的业务处理逻辑
const ctrl = require('./controller.js')
// 只要客户端请求根路径 就提示客户端请求后台服务器成功
router.get('/',ctrl.testAPI)
// 请求所有英雄列表接口
router.get('/getAllHero',ctrl.getAllHero)
// 插入新的英雄数据
router.post('/addHero',ctrl.addHero)
// 根据Id获取英雄信息
router.get('/getHero/:id',ctrl.getHero)
// 根据Id更新英雄数据
router.post('/updateHero/:id',ctrl.updateHero)
// 根据Id软删除英雄数据
router.get('/deleteHero/:id',ctrl.deleteHero)
module.exports = router