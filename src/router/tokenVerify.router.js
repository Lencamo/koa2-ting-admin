const { verifyAuth } = require('../middleware/auth.middleware.js')

const Router = require('@koa/router')

const demoRouter = new Router({
  prefix: '/demo'
})

demoRouter.get('/', (ctx, next) => {
  console.log('连接测试')
})

demoRouter.get('/api', verifyAuth, (ctx, next) => {
  // console.log('token有效性测试')

  ctx.body = {
    code: 0,
    message: 'token验证成功!!!',
    data: {
      payload: ctx.user
    }
  }
})

module.exports = demoRouter
