const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

/* 
demo 2
app.use(async (ctx, next) => {
  console.log('1')
  next()
  console.log('2')
})

app.use(async (ctx, next) => {
  console.log('3')
  next()
  console.log('4')
})

app.use(async (ctx, next) => {
  console.log('5')
  console.log('6')
  ctx.body = 'hello'
}) 

*/

app.use(async (ctx, next) => {
  console.log('1')
  await next()
  console.log('2')
})

app.use(async (ctx, next) => {
  console.log('3')
  await next()
  console.log('4')
})

app.use(async (ctx, next) => {
  console.log('5')
  let result = await fs.readFileSync('./app.js')
  console.log('6')
  ctx.body = 'hello '
}) 


app.listen(3333)

/* 
demo 1
let f1 = () => {
  console.log(1.1);
  f2();
  console.log(1.2);
}

let f2 = () => {
  console.log(2.1);
  f3();
  console.log(2.2);
}

let f3 = () => {
  console.log(3.1);
  console.log(3.2);
}

f1(); 

*/