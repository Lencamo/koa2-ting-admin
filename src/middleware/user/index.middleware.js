const { md5Password } = require('../../utils/handle-password.js')

const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_ALREADY_EXISTS } = require('../../config/constants.js')
const userService = require('../../service/user/index.service.js')

const verifyUser = async (ctx, next) => {
  const { username, password } = ctx.request.body

  // 1、验证是否为空
  if (!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2、验证用户名是否占用
  const users = await userService.findUserByName(username)
  if (users.length) {
    return ctx.app.emit('error', NAME_ALREADY_EXISTS, ctx)
  }

  await next()
}

const handlePassword = async (ctx, next) => {
  const pwd = ctx.request.body.password

  // 使用md5对密码进行加密
  ctx.request.body.password = md5Password(pwd)

  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}
