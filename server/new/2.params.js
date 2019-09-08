const Koa = require('koa')  // 1.导入一个类
const app = new Koa() // 2. 创建实例

// ctx 上有四个属性
// request  koa封装
// response  koa封装
// req node对象  
// res node对象
app.use(async (ctx, next) => {
  console.log(ctx.method)
  console.log(ctx.url)
  console.log(ctx.headers)
  console.log(ctx.querystring) // 查询字符串
  console.log(ctx.query) 

  // res.end()  res.write()
  // ctx.res.write('hello') 在koa里面不能直接通过这种方法写入响应体
  ctx.body = ctx.headers
  // ctx.respond.body = ctx.headers
})

app.listen(8080) 