module.exports = (app) => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  // assert包可以简易判断服务端发送数据是否正确，从而做出判断
  const assert = require('http-assert')
  const Adminuser = require('../../models/Adminuser')
  // 用以校验用户是否是通过正常登录访问内部资源
  const authMiddleware = require('../../middleware/auth')
  // 用户请求服务器资源，将对应关键字转换为服务器对应字符的中间件
  const resourceMiddleware = require('../../middleware/resource')

  const router = express.Router()
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 处理的基本处理，用以服务端进行简单的数据存储和数据读取、增删改查操作
  // 服务器发起get请求将分类数据返回给用户
  router.get('/', async (req, res) => {
    // 对数据进行特殊处理
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(200)
    res.send(items)
  })
  // 服务器发起修改请求时，将用户数据发给客户端
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  // 服务器修改时，发起的请求数据
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 客户端发起请求删除数据时
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 处理英雄装备的特殊出例
  // 导入Multer组件，处理上传文件存放地址问题
  const multer = require('multer')
  // multer处理导入文件的地址
  const upload = multer({ dest: 'uploads' })
  // 接受一个以 fieldname 命名的文件。这个文件的信息保存在 req.file
  // 处理文件上传的中间件
  app.use('/admin/api/uploads', authMiddleware(), upload.single('file'), (req, res, next) => {
    const file = req.file
    // 在req上挂载一个属性，该属性用以标识该文件上传的地址
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
    next()
  })

  // 进行登录请求路由
  app.post('/admin/api/login', async (req, res) => {
    // 通过用户传来的数据进行判断查找账号
    const { username, password } = req.body
    // 找到用户账号信息相应模型

    const user = await Adminuser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '用户密码输入错误')

    // 返回token
    // 获取加密对象
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send(token)
  })
  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}
