const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const path = require('path')
const app = new Koa()

app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}))

app.use(async (ctx, next) => {
  ctx.state.userInfo = '啊哈哈哈'
  await next()
})

router.get('/', async ctx => {
  let title = '你好 ejs'
  await ctx.render('home', {
    title
  })
})

router.get('/news', async ctx => {
  let list = ['abc', 'bcd', 'def']
  let content = '<h2>这是一个h2标题</h2>'
  let num = 12

  await ctx.render('news', {
    list,
    content,
    num
  })
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log(`server running at 3000`)
})