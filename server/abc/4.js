const Koa = require('koa')

const app = new Koa()

app.use( async (ctx, next) => {
  ctx.body = ctx
})
app.listen(3000)