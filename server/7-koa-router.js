const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

// 主路由
const router = new Router()
// 子路由
const home = new Router()
const news = new Router()


home.get('/', async ctx => {
  ctx.body = '我是home'
})

home.get('/a', async ctx => {
  ctx.body = '我是home页 a页'
})

home.get('/b', async ctx => {
  ctx.body = '我是home页 b页'
})

news.get('/', async ctx => {
  ctx.body = '我是news'
})

news.get('/a', async ctx => {
  ctx.body = '我是news页 a页'
})

news.get('/b', async ctx => {
  ctx.body = '我是news页 b页'
})

router.get('/', async ctx => {
  ctx.body = 'index'
})

router.use('/home', home.routes(), home.allowedMethods())
router.use('/news', news.routes(), home.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000, () => {
  console.log(`server running at 3000`)
})

/**
router.get('/', async ctx => {
  ctx.body = '我是首页'
})
router.get('/home', async ctx => {
  ctx.body = '我是homepage'
})

router.get('/new', async ctx => {
  ctx.body = '我是新闻页'
})
 */

