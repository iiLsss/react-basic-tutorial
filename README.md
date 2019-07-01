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

React基础知识复习
1. react是face-book公司开发的一款MVC版js框架
  MVC:Model（数据层）、VIEW（视图层）、CONTROLLER（控制层）
  核心思想：通过数据的改变来影响视图的渲染（数据驱动）

2. 基于脚手架create-react-app快速构建一个react工程项目结构
  自动安装react的核心组件：react、react-dom
  自动安装webpack，并且完成相关的配置
   -> 区分了开发环境和生成环境
   -> 安装babel已经对应的语言解析包，可以把react和es6进行编译



redux基础知识复习

redux：进行状态统一管理的库（适用于任何技术体系的项目）
  1.  只要两个或者多个组件之间想要实现信息的共享，都可以基于redux解决，把共享的信息存储到redux容器中进行管理
  2. 还可以适用redux做临时存储：页面加载的时候，把服务器获取的数据信息存储到redux中，组件渲染需要的数据，从redux中获取，这样只要页面不刷新，路由切换的时候，再次渲染组件不需要重新从服务器拉去数据，直接从redux中获取即可；页面刷新，从头开始！

**createStore**

createStore(reducer) 存储的是各个组件状态信息

reducer函数 修改容器状态信息的管理员