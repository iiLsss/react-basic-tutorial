const Koa = require('koa')  // 1.导入一个类
const app = new Koa() // 2. 创建实例
/**
 * 有两个参数 ctx nex
 * ctx context 是koa提供一个队，包括一些常见的方法和属性
 * next 运行下一个中间件
 **/
app.use(async function (ctx, next) {
  console.log(1)
  await next()
  console.log('123')
}) // 4.使用中间件 推荐用async 

app.use(async function (ctx, next) {
  console.log(2)
}) // 4.使用中间件 推荐用async 

app.listen(8080) // 3. 监听8080端口

// 思考； express和koa中间件有啥区别呢？express 有上往下 不会返回
// koa像洋葱一样