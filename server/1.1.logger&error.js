const Koa = require('koa')
const logger = require('koa-logger')

const app = new Koa()

app.use(logger())

app.use(async ctx => {
  console.log(ctx)
  ctx.body="koa 请求成功"
})

app.listen(3000, () => {
  console.log(`server running at 3000`)
})
