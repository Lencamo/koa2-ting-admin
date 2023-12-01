const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
  NAME_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
  OPERATION_IS_NOT_ALLOWED
} = require('../config/constants.js')

const errorHandle = (err, ctx) => {
  let code = 0
  let message = ''

  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或者密码不能为空~~'
      break
    case NAME_ALREADY_EXISTS:
      code = -1002
      message = '用户名已被注册，请输入新的用户名~~'
      break
    case NAME_NOT_EXISTS:
      code = -1003
      message = '用户名不存在，请输入正确的用户名~~'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '密码错误，请输入正确的密码~~'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = 'token过期或者无效的token，请重新登录~~'
      break
    case OPERATION_IS_NOT_ALLOWED:
      code = -2001
      message = '你没有当前操作的权限~~'
      break
    default:
      break
  }

  ctx.body = {
    code,
    message
  }
}

module.exports = errorHandle
