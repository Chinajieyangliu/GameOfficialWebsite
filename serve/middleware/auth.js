const jwt = require('jsonwebtoken')
// assert包可以简易判断服务端发送数据是否正确，从而做出判断
const assert = require('http-assert')
const Adminuser = require('../models/Adminuser')
module.exports = (options) => async (req, res, next) => {
  // 获取服务器端给的请求头
  const token = String(req.headers.authorization || '')
    .split(' ')
    .pop()
  // 判断是否有token，如果没有不准访问
  assert(token, 401, '请先登录')
  // 解密服务端token数据
  const { id } = jwt.verify(token, req.app.get('secret'))
  assert(id, 401, '请重新登录')
  req.user = await Adminuser.findById(id)
  assert(req.user, 401, '请先登录')
  await next()
}
