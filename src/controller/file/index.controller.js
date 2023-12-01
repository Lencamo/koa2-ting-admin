const { createReadStream } = require('node:fs')
const { UPLOAD_PATH, APP_HOST, APP_PORT } = require('../../config/dotenv.js')
const fileService = require('../../service/file/index.service.js')

class fileController {
  async upload(ctx, next) {
    // 1、接收数据
    const { filename, mimetype, size } = ctx.request.file
    const { id: user_id, username } = ctx.user

    // 2、数据库交互
    // - 上传头像
    const result = await fileService.upload(filename, mimetype, size, user_id)

    // - 存储头像地址到t_user表中
    const avatar_url = `${APP_HOST}:${APP_PORT}/file/${user_id}/avatar` // 存储的是👏获取头像接口地址
    const result2 = await fileService.storeAvatarUrl(avatar_url, user_id)
    console.log(avatar_url)

    // 3、发送响应信息
    ctx.body = {
      code: 0,
      message: '头像上传成功!!!',
      data: {
        avatar_url
      }
    }
  }

  async show(ctx, next) {
    // 1、接收数据
    const { userId: user_id } = ctx.params

    // 2、数据库交互
    const result = await fileService.show(user_id)
    const { filename, mimetype } = result

    // 3、发送响应信息
    // - 图片处理🤔
    ctx.type = mimetype
    ctx.body = createReadStream(`${UPLOAD_PATH}/${filename}`)
  }
}

module.exports = new fileController()
