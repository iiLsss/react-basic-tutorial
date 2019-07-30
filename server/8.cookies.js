const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.cookies.set('come', 'y')
  if (ctx.url === '/index') {
    ctx.cookies.set('username', 'lsss', {
      domain: 'localhost',
      path: '/index',
      // secure: true, // 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效
      masAge: 1000 * 60 * 60 * 1,  // 一个数字表示从 Date.now() 得到的毫秒数
      // expires: new Date('2018-08-29'), // 过期的 Date
      // httpOnly: false,  // 是否只用于http请求中获取
      // overwrite: false  // 是否允许重写
    })
    // maxAge=> 一个数字表示从Date.now()得到的毫秒值
    // expires=> cookie过期时间
    // path=> cookie路径，默认‘/’
    // domain=> 域名
    // secure=> 默认fasle，设置成true则https也可访问
    // httpOnly=> 是否只是服务器可访问cookie，默认true
    ctx.body = `welcome ${ctx.cookies.get('username')}`
  } else {
    ctx.body = `welcome ${ctx.cookies.get('come')}`
  }
})

app.listen(3333, () => {
  console.log(`server running at 3333`)
})