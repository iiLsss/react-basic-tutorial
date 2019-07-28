const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  let url = ctx.url
  switch (url) {
    case '/':
      ctx.body = '我是首页'
      break;
    case '/home':
      ctx.body = '我是home页'
      break;
    default:
      ctx.body = '未找到此页面'
      break;
  }
})

app.listen(3333, () => {
  console.log(`Server running at 3333`)
})