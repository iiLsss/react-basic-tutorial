
const Koa = require('koa')
const app = new Koa()
app.context.abc = '啊哈哈哈'

app.use(async ctx => {
  ctx.body = ctx.abc
})

app.listen(3000, () => {
  console.log(`Server running at 3333`)
})

// ctx.body = 'hello 小霸王'
// ctx.body = JSON.stringify(ctx.header, null, 2) + JSON.stringify(ctx.request.header, null, 2)
