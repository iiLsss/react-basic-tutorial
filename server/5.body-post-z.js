const koa = require('koa')
const app = new koa()
app.use(async ctx => {
  console.log(ctx.method)
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <form method="POST" enctype="multipart/form-data">
        <p>
          姓名：<input type="text" name="username" />
        </p>
        <p>
          上传 <input type="file" name="file"/>
        </p>
        <input type="submit" value="提交">
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = 'success'
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3333, () => {
  console.log(`server running at 3333`)
})



/**
 * 请求头中的内容类型
 * Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryiY7SKBu5jEyZBCSk
 * 
 */