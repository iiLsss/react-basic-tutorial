const Koa = require('koa')
const koaRouter = require('koa-router')
const app = new Koa()

// 主路由
const router = new koaRouter()

const home = new koaRouter()
const news = new koaRouter()

home.get('/', ctx => {
  ctx.body = 'home首页'
})

home.get('/a', ctx => {
  ctx.body = 'home/a'
})

news.get('/', ctx => {
  ctx.body = 'new 页'
})

news.get('/a', ctx => {
  ctx.body = 'new / a'
})

router.use('/home', home.routes(), home.allowedMethods())
router.use('/new', news.routes(), news.allowedMethods())

app.use(router.routes())
app.listen(3000)