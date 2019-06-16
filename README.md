# react-basic-tutorial

```bash
npx create-react-app my-app
cd my-app
npm start

```

src目录

- `index.js`项目入口文件

工程目录
+ react
+ react-dom
+ react-scripts集成了webpack需要的内容
  - babel
  - css
  - eslint
  - webpack


```
ReactDom.render([JSX], [CONTAINER], [CALLBACK]): 把JSX元素渲染到页面中
JSX: REACT虚拟元素
CONTAINER: 容器，我们想把元素放到页面中的哪个容器中
CALLBACK: 当把内容放到页面中呈现触发的回调函数

JSX: REACT独有的语法  JAVASCRIPT+XML

1. 不建议我们把jsx直接渲染到body中，而是放在自己创建的容器中。
2. 在JSX中出现的{}是存放js的，但是要求js代码执行完成有返回的结果
```

