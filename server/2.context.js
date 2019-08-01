const Koa = require('koa')

const app = new Koa()


app.use(async ctx => {
  ctx.body = 'hello 小霸王'
  ctx.body = JSON.stringify(ctx.header, null, 2) + JSON.stringify(ctx.request.header, null, 2)
})

app.listen(3333, () => {
  console.log(`Server running at 3333`)
})

// 1. ctx 什么？ 打印来
