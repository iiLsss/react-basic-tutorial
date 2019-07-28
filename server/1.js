const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
})

server.listen(3333, () => {
  console.log(`server running at 3333`)
})


const koa = require('koa')

const app = new koa()

app.listen(3333, () => {
  console.log(`server running at 3333`)
})