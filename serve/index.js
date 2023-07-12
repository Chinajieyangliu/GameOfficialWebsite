const express = require('express')
const app = express()

// 全局添加一个秘钥加密字符串属性
app.set('secret', 'liuhaoshinidedie')

//使用中间件将获取的数据使用json转换形式，解决跨域问题
app.use(require('cors')())
app.use(express.json())
// 使得我们upload中的文件可以被访问
app.use('/uploads', express.static(__dirname + '/uploads'))
// 将前端资源变成可访问的静态资源
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

// 导入damin下注册的路由模块
require('./routes/admin')(app)
// 导入数据库路由模块
require('./plugins/db')(app)
// 前端数据路由模块
require('./routes/web')(app)
app.listen(3000, () => {
  console.log('服务器启动成功')
})
