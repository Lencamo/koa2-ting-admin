const koa = require('koa')

// 导入区域
const { bodyParser } = require('@koa/bodyparser')
const registerRouter = require('../router/index.js')
const errorHandle = require('../utils/handle-error.js')

const app = new koa()

// api路由
app.use(bodyParser())
registerRouter(app)

// 错误处理
app.on('error', errorHandle)

module.exports = app
