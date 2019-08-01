const koa = require('koa')
const session = require('koa-session')
const app = new koa()

app.keys = ['some secret hurr'] //  签名 默认

const CONFIG = {
  key: 'koa:sess', // cookie key (default is koa:sess)
  maxAge: 86400000, // cookie 的过期时间 maxAge in ms (default is 1 days)
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}
app.use(session(CONFIG, app));

app.use(ctx => {
  if (ctx.path === '/favicon.ico') return
  let n = ctx.session.views || 0
  ctx.session.views = ++n;
  ctx.body = n + ' views'
})

app.listen(3333, () => {
  console.log(`server running at 3333`)
})