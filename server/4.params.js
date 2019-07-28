const koa = require('koa')

const app = new koa()

app.use(async ctx => {
  let query = ctx.query
  let querystring = ctx.querystring
  ctx.body = {
    query, querystring
  }
})

app.listen(3333, () => {
  console.log(`server running at 3333`)
})
