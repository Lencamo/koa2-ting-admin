const Router = require('@koa/router')

// body数据校验
const { verifyUser, handlePassword } = require('../../middleware/user/index.middleware.js')

// controller引入
const userController = require('../../controller/user/index.controller.js')

const userRouter = new Router({
  prefix: '/user'
})

// 用户注册
userRouter.post('/', verifyUser, handlePassword, userController.create)

// 单个用户详情
userRouter.get('/:userId', userController.show)

module.exports = userRouter
