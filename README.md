## 结构分层划分

&emsp;&emsp;中间件/项目大致走向：

- 项目入口：

> ---> main --> app

- MVC 架构：

> ---> router ---> [middleware] ---> controller ---> service

## API 文档

> https://apifox.com/apidoc/shared-cd8438ef-e681-4993-87aa-35100d3e566e

## 项目部署

```sh
git clone https://github.com/Lencamo/koa2-ting-admin.git
npm install

# npm install nodemon -g
# npm run dev
npm install pm2 -g
pm2 start ./src/main.js --name koa2-ting-admin
```
