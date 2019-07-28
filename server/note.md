# 1

核心服务  HTTP 接收 解析 响应

Application Context
Request Response
Middlewares
Session Cookie

安装 

npm i koa -S

```js
const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello koa'
})

app.listen(3000, () => {
  console.log('服务启动')
})
```

上述代码分别是什么意思？

打开node_modules

找到koa 并看到koa koa-compose koa-convert koa-is-json

查看lib文件 并没有index.js文件
继续查看pachage.js 找到`"main": "lib/application.js",` 则applicaiton.js 是入口文件。


# 2

依赖模块

```js
const isGeneratorFunction = require('is-generator-function');
const debug = require('debug')('koa:application');
const onFinished = require('on-finished');
const response = require('./response');
const compose = require('koa-compose');
const isJSON = require('koa-is-json');
const context = require('./context');
const request = require('./request');
const statuses = require('statuses');
const Emitter = require('events');
const util = require('util');
const Stream = require('stream');
const http = require('http');
const only = require('only');
const convert = require('koa-convert');
const deprecate = require('depd')('koa');
```

源码

```js
// 暴露一个class类 继承emiiter 
module.exports = class Application extends Emitter {
  constructor() {
    super();

    this.proxy = false;
    this.middleware = [];
    this.subdomainOffset = 2;
    this.env = process.env.NODE_ENV || 'development';
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
    if (util.inspect.custom) {
      this[util.inspect.custom] = this.inspect;
    }
  }


  listen(...args) { 
    debug('listen');
  // 通过 http.createServer 创建服务 并监听传入的端口号
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

  use(fn) { 
    // 将fn push到 middleware 数组中
    this.middleware.push(fn);
    return this;
  }

  callback() {
    // 通过compose 处理中间件数组
    const fn = compose(this.middleware);
    // 当前的req, res 生成上下文
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };

    return handleRequest;
  }

  handleRequest(ctx, fnMiddleware) {
    // 通过context拿到response
    const res = ctx.res;
    // 设置了一个默认的状态吗404
    res.statusCode = 404;
    // 配置onerror和handleResponse的事件
    const onerror = err => ctx.onerror(err);
    const handleResponse = () => respond(ctx);
    onFinished(res, onerror);
    // 请求上下文的context交给了中间件数组，中间件处理相应事件，处理完成后交给handleResponse 返回给客户端
    return fnMiddleware(ctx).then(handleResponse).catch(onerror);
  }

  createContext(req, res) {
    const context = Object.create(this.context);
    const request = context.request = Object.create(this.request);
    const response = context.response = Object.create(this.response);
    context.app = request.app = response.app = this;
    context.req = request.req = response.req = req;
    context.res = request.res = response.res = res;
    request.ctx = response.ctx = context;
    request.response = response;
    response.request = request;
    context.originalUrl = request.originalUrl = req.url;
    context.state = {};
    return context;
  }

};

/**
 * Response helper.
 */
// 向客户端返回数据
function respond(ctx) {
  // allow bypassing koa
  if (false === ctx.respond) return;

  if (!ctx.writable) return;

  const res = ctx.res;
  let body = ctx.body;
  const code = ctx.status;

  // ignore body
  if (statuses.empty[code]) {
    // strip headers
    ctx.body = null;
    return res.end();
  }

  if ('HEAD' == ctx.method) {
    if (!res.headersSent && isJSON(body)) {
      ctx.length = Buffer.byteLength(JSON.stringify(body));
    }
    return res.end();
  }

  // status body
  if (null == body) {
    if (ctx.req.httpVersionMajor >= 2) {
      body = String(code);
    } else {
      body = ctx.message || String(code);
    }
    if (!res.headersSent) {
      ctx.type = 'text';
      ctx.length = Buffer.byteLength(body);
    }
    return res.end(body);
  }

  // responses
  if (Buffer.isBuffer(body)) return res.end(body);
  if ('string' == typeof body) return res.end(body);
  if (body instanceof Stream) return body.pipe(res);

  // body: json
  body = JSON.stringify(body);
  if (!res.headersSent) {
    ctx.length = Buffer.byteLength(body);
  }
  res.end(body);
}

```


# 3


koa-logger

```js


```

# 4

koa-compose


```js
// 纯函数
function add(x) {
  return x + 1
}
add(1) // 2
add(1) // 2
add(1) // 2
add(1) // 2
```

```js
// 尾递归
function add(x) {
  if (i > 3) return i
  console.log(i)
  return add(i + 1)
}

```

```js

function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }
  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
```


# 5 

cookie session