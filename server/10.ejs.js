const koa = require('koa')
const views = require('koa-views')
const path = require('path');
const logger = require('koa-logger')
const app = new koa()
app.use(logger())

app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}))

app.use(async ctx => {
  let title = 'Hello'
  let list = [1,2,3,4,5]
  let num = 25
  await ctx.render('index', {
    title,
    list,
    num
  })
})

app.listen(3333, () => {
  console.log(`server running at 3333`)
})