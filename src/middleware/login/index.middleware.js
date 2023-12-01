const { md5Password } = require('../../utils/handle-password.js')

const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_NOT_EXISTS,
  PASSWORD_IS_INCORRENT
} = require('../../config/constants.js')
const userService = require('../../service/user/index.service.js')

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body

  // 1、验证是否为空
  if (!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2、验证用户是否存在
  const users = await userService.findUserByName(username)
  if (!users[0]) {
    return ctx.app.emit('error', NAME_NOT_EXISTS, ctx)
  }

  // 3、验证密码是否匹配
  if (md5Password(password) !== users[0].password) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRENT, ctx)
  }

  // 4、数据传递
  // console.log(users[0])
  ctx.user = users[0]

  await next()
}

module.exports = {
  verifyLogin
}
