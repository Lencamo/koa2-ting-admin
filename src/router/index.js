// 方式1
// 自动化注册路由
const { readdirSync } = require('node:fs')

// =================

// 递归-自动化注册路由
const registerRouter = (app) => {
  const getFileName = function (path) {
    readdirSync(path, { withFileTypes: true }).forEach((item) => {
      if (item.isDirectory()) {
        getFileName(`${path}/${item.name}`)
      } else {
        if (item.name !== 'index.js') {
          const Router = require(`${path}/${item.name}`)
          app.use(Router.routes(), Router.allowedMethods())
        }
      }
    })
  }
  getFileName(__dirname)
}

module.exports = registerRouter
