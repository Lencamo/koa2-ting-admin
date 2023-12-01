const { APP_PORT } = require('./config/dotenv.js')

// app引入
const app = require('./app/index.js')

app.listen(APP_PORT, () => {
  console.log(`${APP_PORT}端口服务器启动成功!!!`)
})
