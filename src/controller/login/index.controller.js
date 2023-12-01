const { tokenSign } = require('../../app/jwt.js')

class loginController {
  async sign(ctx, next) {
    // 1、接收数据
    const { id, username } = ctx.user

    // 2、颁发token令牌
    const payload = { id, username }
    const token = tokenSign(payload)

    // 3、发送响应信息
    ctx.body = {
      code: 0,
      msssage: '用户登录成功！',
      data: {
        ...payload,
        token
      }
    }
  }
}

module.exports = new loginController()
