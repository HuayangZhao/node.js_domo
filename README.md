# node.js_domo
Node.js对数据库基本操作   前后端分离 模块化

## 需求分析

1. 后端项目运行地址：http://127.0.0.1:5000
2. 前端项目运行地址：http://127.0.0.1:3000
3. 后端项目 Node + mysql + express + body-parser + CORS 
4. 前端项目 Jquery + art-template + Semantic UI


## 数据库设计 - hero

| 字段名 | 字段类型 |  字段描述  |
|--------|-----------|------------|
|  id       |      int     | 主键Id（自增）  |
|  name |   varchar |  英雄名称  |
|  gender  |   varchar |  性别     |
|  ctime   |   varchar |创建时间  |
|  isdel   | tinyint（布尔值） | 是否被删除 0 表示未删除；1 表示已经被删除 |

