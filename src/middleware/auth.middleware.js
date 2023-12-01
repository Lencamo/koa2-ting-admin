const { UNAUTHORIZATION } = require('../config/constants.js')
const { tokenVerify } = require('../app/jwt.js')

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.header.authorization
  // console.log(authorization)

  // undefined处理
  if (!authorization) {
    return ctx.app.emit('error', UNAUTHORIZATION, ctx)
  }

  try {
    // jwt验证异常检测
    const token = authorization.replace('Bearer ', '')
    const payload = tokenVerify(token)
    // console.log(payload)

    // verifyLogin设置的 ctx.user 用于：jwt认证的payload
    // verifyAuth设置 的 ctx.user 用于：其他任何经过auth认证的接口待用
    ctx.user = payload
    // console.log(payload)

    await next()
  } catch (error) {
    ctx.app.emit('error', UNAUTHORIZATION, ctx)
  }
}

module.exports = {
  verifyAuth
}
