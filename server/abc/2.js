const Koa = require('koa')
const koaRouter = require('koa-router')
const app = new Koa()
const router = new koaRouter()

router.get('/', ctx => {
  ctx.body = '首页'
})

router.get('/home', ctx => {
  let query = ctx.query
  ctx.body = query
})

router.get('/detail', ctx => {
  ctx.body = 'detail'
})

router.post('/post', ctx => {
  ctx.body = {
    code: 200,
    msg: '请求成功 d'
  }
})

app.use(router.routes())
app.listen(3000)