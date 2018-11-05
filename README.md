# node.js_domo
Node.js对数据库基本操作   前后端分离 模块化

## 环境搭建

1. 后端项目运行地址：http://127.0.0.1:5000
2. 前端项目运行地址：http://127.0.0.1:3000
3. 后端项目 Node + mysql + express + body-parser + CORS 
4. 前端项目 Jquery + art-template + Semantic UI


## 数据库 - hero

| 字段名 | 字段类型 |  字段描述  |
|--------|-----------|------------|
|  id       |      int     | 主键Id（自增）  |
|  name |   varchar |  英雄名称  |
|  gender  |   varchar |  性别     |
|  say  |   varchar |  台词     |
|  ctime   |   varchar |创建时间(服务器时间) |
|  isdel   | tinyint（布尔值） | 是否被删除 0 表示未删除；1 表示已经被删除 |

## 后台接口设计

#### 获取所有英雄列表

    - 请求类型：GET
    - 请求地址：http://127.0.0.1:5000/getAllHero
    - 请求的参数：--

####  插入新的英雄数据

    - 请求类型：POST
    - 请求地址：http://127.0.0.1:5000/addHero
    - 请求的参数：{ name, gender,say }

####  根据Id获取英雄信息

    - 请求类型：get
    - 请求地址：http://127.0.0.1:5000/getHero/:id
    - 请求的参数：通过 URL 地址，把要查询的英雄Id，携带过去

####  根据Id更新英雄数据

    - 请求类型：POST
    - 请求地址：http://127.0.0.1:5000/updateHero/:id
    - 请求的参数：{ name, gender,say }

####  根据Id软删除英雄数据

    -请求类型：GET
    -请求地址：http://127.0.0.1:5000/deletehero/:id
    -请求参数：通过 URL 地址栏传参，把 要删除的英雄Id提交给服务器


##  Demo结构
    │──.gitignore        				//git忽略文件
    │		
    │──heros.sql        				//sql数据
    │		
    │──README.md        				//说明文档
    │  		
    ├─server            				//后台文件夹
    │      controller.js       			//功能模块
    │      package-lock.json   			
    │      package.json        			//后台包信息
    │      router.js           			//路由模块
    │      server.js           			//启动后台
    │       		
    └─web
        │  package-lock.json   			    
        │  package.json        			//前台包信息
        │  web.js              			//前台接口
        │  		
        ├─semantic            			//semantic-ui框架
        │   		
        │              		
        └─views                			//前台页面
                index.css   
                index.html
                index.js


