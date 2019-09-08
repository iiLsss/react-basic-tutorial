# koa

1. koa
2. 安装
3. 级联中间件
4. 上下文
5. 获取请求参数
6. 获取请求体
7. 使用中间件获取普通请求体
8. 使用中间件获取包含文件的请求体
9. 路由中间件
10. cookie
11. session
12. 模板引擎
13. 静态资源中间件
14. koa实现
15. generator
16. form-data

## koa&安装

```
npm i koa -S

const Koa = require('koa')  // 1.导入一个类
const app = new Koa() // 2. 创建实例
app.listen(8080) // 3. 监听8080端口

// 有两个参数
// 
app.use(function(ctx, next){

}) // 4.使用中间件 推荐用async 
```
> 思考； express和koa中间件有啥区别呢？


##
