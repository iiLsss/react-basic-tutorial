const Koa = require('koa')
const querystring = require('querystring')
const app = new Koa()

app.listen(3000)
// get 返回一个空白表单
// post /login 表示提交 用户注册数据
app.use(async (ctx, next) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.set('Content-type', 'text/html;charset=utf8')
    ctx.body = (
      `
        <form method="POST">
          用户名<input type="text" name="username" />
          <input type="submit" value="提交" />
        </form>
      `
    )
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = await parse(ctx.req)
  } else {
    await next()
  }
})

function parse(req) {
  return new Promise((resolve, reject) => {
    let buffers = []
    req.on('data', (data) => {
      buffers.push(data)
    })
    req.on('end', () => {
      let result = Buffer.concat(buffers)
      console.log(result.toString())
      resolve(querystring.parse(result.toString()))
    })
  })
}