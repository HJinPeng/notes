# @koa/router

用于控制路由。[API文档](https://github.com/koajs/router/blob/HEAD/API.md)

## 安装

```bash
npm install @koa/router
# or Yarn
yarn add @koa/router
```

## 使用

根据功能划分路由，如权限路由，用户路由，菜单路由...

新建权限路由，`routers/auth.js`

```js
// routers/auth.js

const Router = require('@koa/router')
const router = new Router();

router.post('/login', async (ctx, next) => {
  // ctx.router available
})
router.get('/getUserInfo', async (ctx, next) => {})

module.exports = router
```

新建 `routers/index.js`

```js
// routers/index.js

const Router = require('@koa/router')
const authRouter = require('./auth')

const router = new Router();

// authRouter.routes() 将 authRouter 的所有定义的路由添加到 router 中
// authRouter.allowedMethods() 用于处理路由不支持的 HTTP 方法，并返回适当的 HTTP 响应
router
  .use(authRouter.routes(), authRouter.allowedMethods())

module.exports = router
```

在入口文件，如 `app.js`

```js
// app.js

const Koa = require('koa')
const router = require('./routers')

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log('http://127.0.0.1:3000');
```

用 postman 或 apifox 等工具调用接口，如
- POST http://127.0.0.1:3000/login
- GET  http://127.0.0.1:3000/getUserInfo