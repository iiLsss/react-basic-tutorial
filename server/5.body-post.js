const koa = require('koa')
const koaBody = require('koa-body')
const app = new koa()
app.use(koaBody({
  multipart: true
}))
app.use(async ctx => {
  console.log(ctx.method)
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    //  如果要在表单里上传的话，就需要给表单增加一个enctype="multupart/form-data"
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
    let body = ctx.request.body
    let file = ctx.request.files
    ctx.body = {
      body, file
    }
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3333, () => {
  console.log(`server running at 3333`)
})
