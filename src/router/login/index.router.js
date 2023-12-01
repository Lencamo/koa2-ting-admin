const Router = require('@koa/router')

// body数据校验
const { verifyLogin } = require('../../middleware/login/index.middleware.js')

// controller引入
const loginController = require('../../controller/login/index.controller.js')

const userRouter = new Router({
  prefix: '/login'
})

// 用户登录
userRouter.post('/', verifyLogin, loginController.sign)

module.exports = userRouter
