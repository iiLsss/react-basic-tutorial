
const Koa = require('koa');
const app = new Koa();

const router = require('koa-router')();

// 添加路由
router.get('/', (ctx, next) => {
  let query = ctx.query
  let querystring = ctx.querystring
  ctx.body = {
    query,
    querystring
  };
  next();
});

// 加载路由中间件
app.use(router.routes());

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001');
});